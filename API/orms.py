from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Date
from sqlalchemy.orm import relationship, declarative_base

Base = declarative_base()

class AuthOrm(Base):
    __tablename__ = "auth"
    id = Column(Integer, primary_key=True, index=True)
    phone = Column(String, index=True, nullable=False)
    password = Column(String, nullable=False)
    customers = relationship("CustomerOrm", back_populates="auth", cascade="all, delete-orphan")

class CustomerOrm(Base):
    __tablename__ = "customers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)
    email = Column(String, nullable=True)
    auth_id = Column(Integer, ForeignKey("auth.id")) 
    auth = relationship("AuthOrm", back_populates="customers")
    carts = relationship("CartOrm", back_populates="customer", cascade="all, delete-orphan")
    customer_gift_cards = relationship("CustomerGiftCardOrm", back_populates="customer", cascade="all, delete-orphan")
    orders = relationship("OrderOrm" ,back_populates="customer", cascade="all, delete-orphan")
    subscription_plans = relationship("SubscriptionPlanOrm", back_populates="customer", cascade="all, delete-orphan")

class ProductOrm(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    category = Column(String, nullable=False)
    price = Column(Integer, nullable=False)
    img = Column(String, nullable=False)
    cart_items = relationship("CartItemOrm",back_populates="product", cascade="all, delete-orphan")

class CartOrm(Base):
    __tablename__ = "carts"
    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey("customers.id"), nullable=False)
    customer = relationship("CustomerOrm", back_populates="carts")
    cart_items = relationship("CartItemOrm", back_populates="cart", cascade="all, delete-orphan")

class CartItemOrm(Base):
    __tablename__ = "cart_items"
    id = Column(Integer, primary_key=True, index=True)
    quantity = Column(Integer, nullable=False)
    cart_id = Column(Integer, ForeignKey("carts.id"),nullable=False)
    product_id = Column(Integer, ForeignKey("products.id"),nullable=False)
    cart = relationship("CartOrm", back_populates="cart_items")
    product = relationship("ProductOrm", back_populates="cart_items")

class GiftCardOrm(Base):
    __tablename__ = "gift_cards"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    discount = Column(Float, nullable=False)
    status = Column(Boolean, nullable=False)
    customer_gift_cards = relationship("CustomerGiftCardOrm",back_populates="gift_card", cascade="all, delete-orphan")

class CustomerGiftCardOrm(Base):
    __tablename__ = "customer_gift_cards"
    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey("customers.id"), nullable=False)
    gift_card_id = Column(Integer, ForeignKey("gift_cards.id"), nullable=False)
    gift_card = relationship("GiftCardOrm",back_populates="customer_gift_cards")
    customer = relationship("CustomerOrm",back_populates="customer_gift_cards")

class OrderOrm(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey("customers.id"), nullable=False)
    created_at = Column(Date, nullable=False)
    total_amount = Column(Float, nullable=False)
    customer = relationship("CustomerOrm", back_populates="orders")
    order_items = relationship("OrderItemOrm", back_populates="order")

class OrderItemOrm(Base):
    __tablename__ = "order_items"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    quantity = Column(Integer, nullable=False)
    order_id = Column(Integer, ForeignKey("orders.id"), nullable=False)
    order = relationship("OrderOrm", back_populates="order_items")

class PaymentOrm(Base):
    __tablename__ = "payments"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)

class ShippingOrm(Base):
    __tablename__ = "shippings"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)

class SubscriptionOrm(Base):
    __tablename__ = "subscriptions"
    id = Column(Integer, primary_key=True)
    price = Column(Float, nullable=False)
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    img = Column(String, nullable=False)
    subscription_plans = relationship("SubscriptionPlanOrm", back_populates="subscription")

class SubscriptionPlanOrm(Base):
    __tablename__ = "subscription_plans"
    id = Column(Integer, primary_key=True)
    frequency = Column(Integer, nullable=False)
    quantity = Column(Integer, nullable=False)
    customer_id = Column(Integer, ForeignKey("customers.id"), nullable=False)
    subscription_Id = Column(Integer, ForeignKey("subscriptions.id"), nullable=False)
    customer = relationship("CustomerOrm", back_populates="subscription_plans")
    subscription = relationship("SubscriptionOrm", back_populates="subscription_plans")