import email
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException
from crud import cart_crud, product_crud, payment_crud, shipping_crud, order_crud, gift_crud
from models.order import OrderReq, OrderIn, OrderItems

async def add_order(db: AsyncSession, order: OrderReq):
    try:
        payment_id =  await payment_crud.add_payment(db, order.payment)
        shipping_id = await shipping_crud.add_shipping(db, order.shipping)
        
        if order.gift_card_id:
            await gift_crud.redeem_gift(db, order.gift_card_id, order.customer_id)

        finalOrder = OrderIn(
            email=order.email,
            name=order.name,
            phone=order.phone,
            total_amount=order.total_amount,
            gift_card_id=order.gift_card_id if order.gift_card_id else None,  
            customer_id=order.customer_id,
            payment_id=payment_id,
            shipping_id=shipping_id
        )

        order_id = await order_crud.add_order(db,finalOrder)

        cart_items = await cart_crud.get_cart_items(db,order.customer_id)
        products = await product_crud.get_all_by_cart_item(db,cart_items)

        items = OrderItems(
            order_id = order_id,
            items= products
        )

        await order_crud.add_items(db,items)

        # return products 
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))