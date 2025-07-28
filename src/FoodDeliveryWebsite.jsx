import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { 
  ChefHat, Clock, Star, MapPin, Phone, Mail, ArrowRight, 
  Search, Filter, ShoppingCart, Plus, Minus, X, Menu as MenuIcon,
  Truck, Shield, Award, Users, Heart, Eye, Play, CheckCircle,
  Zap, Leaf, Utensils, Timer, DollarSign, Globe, Smartphone,
  Camera, Gift, TrendingUp, Headphones, MessageCircle
} from 'lucide-react';
  
  const Toast = ({ toast, removeToast }) => {
  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      case 'info':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-800 text-white';
    }
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return 'ℹ';
    }
  };

  return (
    <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${getToastStyles()}`}>
      <span className="font-semibold">{getIcon()}</span>
      <span className="flex-1">{toast.message}</span>
      <button
        onClick={() => removeToast(toast.id)}
        className="hover:bg-black hover:bg-opacity-20 rounded p-1 transition-colors ml-2"
      >
        ✕
      </button>
    </div>
  );
};


const FoodDeliveryWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(9847);
  const [orderCount, setOrderCount] = useState(15623);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
    


function App() {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href="./assets/Apple-pie.jpg" />
        <title>My App</title>
      </Helmet>
      {/* Your app content */}
    </div>
  );
}
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const observerRef = useRef();

  const showToast = (message, type = 'success') => {
  const id = Date.now();
  const newToast = {
    id,
    message,
    type, 
  };

  setToasts(prev => [...prev, newToast]);

  // Auto remove toast after 4 seconds
  setTimeout(() => {
    removeToast(id);
  }, 4000);
};

const removeToast = (id) => {
  setToasts(prev => prev.filter(toast => toast.id !== id));
};
<div className="fixed top-6 right-6 z-50 space-y-3">
  {toasts.map((toast) => (
    <div
      key={toast.id}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg shadow-lg text-white
        ${toast.type === 'success' && 'bg-green-500'}
        ${toast.type === 'error' && 'bg-red-500'}
        ${toast.type === 'warning' && 'bg-yellow-500'}
        ${toast.type === 'info' && 'bg-blue-500'}
        animate-fadeInUp
      `}
    >
      {/* Optional: add icons for each type */}
      <span>{toast.message}</span>
    </div>
  ))}
</div>



   useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 300); // Show button after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    setIsLoaded(true);
    
    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    
    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observerRef.current.observe(section));

    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    // Counter animation
    const counterInterval = setInterval(() => {
      setSubscriberCount(prev => prev + Math.floor(Math.random() * 3));
      setOrderCount(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(testimonialInterval);
      clearInterval(counterInterval);
    };
  }, []);
  const menuItems = [
    // Appetizers
    { id: 1, name: "Caesar Salad", category: "appetizers", price: 99,image:"./assets/Caesar.jpg", rating: 4.5, time: "10 min", description: "Fresh romaine lettuce with caesar dressing, parmesan cheese, and croutons", isPopular: false, isNew: false },
    { id: 2, name: "Chicken Wings", category: "appetizers", price: 499, image: "./assets/chicken-wings.jpg", rating: 4.7, time: "15 min", description: "Spicy chicken wings served with blue cheese dip and celery sticks", isPopular: true, isNew: false },
    { id: 3, name: "Mozzarella Sticks", category: "appetizers", price: 199, image: "./assets/Mozzarella-Sticks.jpg", rating: 4.3, time: "12 min", description: "Golden fried mozzarella sticks with marinara sauce", isPopular: false, isNew: false },
    
    // Main Courses
    { id: 4, name: "Classic Burger", category: "mains", price: 199, image: "./assets/Classic-homemade.jpg", rating: 4.8, time: "20 min", description: "Beef patty with lettuce, tomato, cheese, and our special sauce", isPopular: true, isNew: false },
    { id: 5, name: "Margherita Pizza", category: "mains", price: 189, image: "./assets/Pizza-3007395.jpg", rating: 4.6, time: "25 min", description: "Fresh mozzarella, tomatoes, basil on wood-fired crust", isPopular: true, isNew: false },
    { id: 6, name: "Grilled Salmon", category: "mains", price: 499, image: "./assets/grilled-salmon.jpg", rating: 4.9, time: "22 min", description: "Atlantic salmon with herbs, served with roasted vegetables", isPopular: false, isNew: true },
    { id: 7, name: "Chicken Alfredo", category: "mains", price: 999, image: "./assets/chicken-alfredo.jpg", rating: 4.4, time: "18 min", description: "Fettuccine pasta with grilled chicken in creamy alfredo sauce", isPopular: false, isNew: false },
    { id: 8, name: "BBQ Ribs", category: "mains", price: 699, image: "./assets/ribs.jpg", rating: 4.7, time: "35 min", description: "Slow-cooked pork ribs with house BBQ sauce and coleslaw", isPopular: false, isNew: false },
    
    // Desserts
    { id: 9, name: "Chocolate Cake", category: "desserts", price: 329, image: "./assets/chocolate_cake.jpg", rating: 4.8, time: "5 min", description: "Rich chocolate layer cake with chocolate ganache", isPopular: true, isNew: false },
    { id: 10, name: "Ice Cream Sundae", category: "desserts", price: 399, image: "./assets/banana-split.jpg", rating: 4.5, time: "3 min", description: "Vanilla ice cream with chocolate sauce, nuts, and cherry", isPopular: false, isNew: false },
    { id: 11, name: "Apple Pie", category: "desserts", price: 299, image: "./assets/Apple-pie.jpg", rating: 4.6, time: "8 min", description: "Traditional apple pie with cinnamon and vanilla ice cream", isPopular: false, isNew: false },
    
    // Beverages
    { id: 12, name: "Fresh Lemonade", category: "beverages", price: 99, image: "./assets/leamonade.jpg", rating: 4.3, time: "2 min", description: "Freshly squeezed lemonade with mint", isPopular: false, isNew: false },
    { id: 13, name: "Iced Coffee", category: "beverages", price: 299, image: "./assets/iced_coffee.jpg", rating: 4.4, time: "3 min", description: "Cold brew coffee with ice and cream", isPopular: false, isNew: false },
    { id: 14, name: "Smoothie Bowl", category: "beverages", price: 199, image: "./assets/Mango-Smoothie.jpeg", rating: 4.7, time: "5 min", description: "Mixed berry smoothie with granola and fresh fruits", isPopular: false, isNew: true },
  ];

  const categories = [
    { id: 'all', name: 'All Items', count: menuItems.length },
    { id: 'appetizers', name: 'Appetizers', count: menuItems.filter(item => item.category === 'appetizers').length },
    { id: 'mains', name: 'Main Courses', count: menuItems.filter(item => item.category === 'mains').length },
    { id: 'desserts', name: 'Desserts', count: menuItems.filter(item => item.category === 'desserts').length },
    { id: 'beverages', name: 'Beverages', count: menuItems.filter(item => item.category === 'beverages').length },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Customer",
      image: "👩‍💼",
      rating: 5,
      text: "FreshBite has completely transformed my lunch routine! The food is always fresh, delivered on time, and the variety is incredible. Highly recommended!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Food Blogger",
      image: "👨‍🍳",
      rating: 5,
      text: "As a food critic, I'm impressed by the quality and presentation. Every dish tells a story, and the delivery experience is seamless. Five stars!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Busy Mom",
      image: "👩‍🏫",
      rating: 5,
      text: "With three kids, FreshBite is a lifesaver! Quick delivery, healthy options, and my family loves every meal. The app is so easy to use too."
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Office Worker",
      image: "👨‍💻",
      rating: 5,
      text: "Best food delivery service in town! The tracking feature is great, and I love how they remember my preferences. Keep up the excellent work!"
    }
  ];

  const achievements = [
    { number: "50K+", label: "Happy Customers", icon: Users, color: "text-blue-500" },
    { number: "25", label: "Minutes Avg Delivery", icon: Clock, color: "text-green-500" },
    { number: "98%", label: "Customer Satisfaction", icon: Heart, color: "text-red-500" },
    { number: "24/7", label: "Customer Support", icon: Headphones, color: "text-purple-500" },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Browse Menu",
      description: "Explore our extensive menu with high-quality photos and detailed descriptions",
      icon: Search,
      color: "bg-blue-500"
    },
    {
      step: 2,
      title: "Place Order",
      description: "Add items to cart, customize your order, and choose delivery preferences",
      icon: ShoppingCart,
      color: "bg-green-500"
    },
    {
      step: 3,
      title: "Track Delivery",
      description: "Real-time tracking from kitchen to your doorstep with live updates",
      icon: Truck,
      color: "bg-orange-500"
    },
    {
      step: 4,
      title: "Enjoy Food",
      description: "Receive fresh, hot food and enjoy your delicious meal at home",
      icon: Utensils,
      color: "bg-purple-500"
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item) => {
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    setCart(cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));
    showToast(`Updated ${item.name} quantity in cart`, 'info');
  } else {
    setCart([...cart, { ...item, quantity: 1 }]);
    showToast(`Added ${item.name} to cart`, 'success');
  }
};

  const updateQuantity = (id, change) => {
  setCart(cart.map(item => {
    if (item.id === id) {
      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        const itemName = menuItems.find(menuItem => menuItem.id === id)?.name;
        showToast(`Removed ${itemName} from cart`, 'warning');
        return null;
      }
      return { ...item, quantity: newQuantity };
    }
    return item;
  }).filter(Boolean));
};

  const removeFromCart = (id) => {
  const item = cart.find(item => item.id === id);
  setCart(cart.filter(item => item.id !== id));
  if (item) {
    showToast(`Removed ${item.name} from cart`, 'warning');
  }
};

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const onSubmit = (data) => {
  console.log('Contact form submitted:', data);
  showToast('Thank you for your message! We will get back to you soon.', 'success');
  reset();
};

  const handleNewsletterSubmit = (e) => {
  e.preventDefault();
  if (newsletterEmail) {
    showToast('Thank you for subscribing to our newsletter!', 'success');
    setNewsletterEmail('');
  } else {
    showToast('Please enter a valid email address', 'error');
  }
};
//   ----------------

const Toast = ({ toast }) => {
  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      case 'info':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-800 text-white';
    }
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return 'ℹ';
    }
  };

  <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
  {toasts.map(toast => (
    <Toast key={toast.id} toast={toast} />
  ))}
</div>

   return (
    <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${getToastStyles()}`}>
      <span className="font-semibold">{getIcon()}</span>
      <span className="flex-1">{toast.message}</span>
      <button
        onClick={() => removeToast(toast.id)}
        className="hover:bg-black hover:bg-opacity-20 rounded p-1 transition-colors ml-2"
      >
        ✕
      </button>
    </div>
  );
};

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="fixed top-6 right-6 z-50 space-y-3">
    {toasts.map((toast) => (
      <Toast key={toast.id} toast={toast} removeToast={removeToast} />
    ))}
  </div>
      {/* Navigation */}
      

      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
  <div className="bg-white/95 backdrop-blur-md shadow-lg border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 shadow-lg">
              <ChefHat className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </div>
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            FreshBite
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group text-sm xl:text-base">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group text-sm xl:text-base"
          >
            Menu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group text-sm xl:text-base">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group text-sm xl:text-base">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden items-center space-x-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium"
          >
            Menu
          </button>
          <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium">
            About
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors duration-200 hover:bg-orange-50 rounded-lg"
          >
            <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center animate-bounce font-medium">
                {getTotalItems() > 99 ? '99+' : getTotalItems()}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-orange-500 transition-colors duration-200 hover:bg-orange-50 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <MenuIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu Dropdown */}
    <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
      <div className="bg-white/98 backdrop-blur-md border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-2">
          <a 
            href="#home" 
            className="block py-2 px-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <button 
            onClick={() => {
              setIsMenuOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 px-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
          >
            Menu
          </button>
          <a 
            href="#about" 
            className="block py-2 px-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="block py-2 px-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden" data-animate>
        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${visibleSections['home'] || isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Truck className="h-4 w-4 mr-2" />
                  Free delivery on orders over Rs30
                  <Zap className="h-4 w-4 ml-2 text-yellow-600" />
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Delicious Food
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent block">
                    Delivered Fast
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Experience the finest cuisine from our kitchen to your doorstep. 
                  Fresh ingredients, expert preparation, lightning-fast delivery.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-2xl"
                >
                  <span>Order Now</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                {/* <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-300 flex items-center space-x-2 hover:shadow-lg"
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Video</span>
                </button> */}
              </div>

              {/* Live Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{Math.floor(orderCount/100)}min</div>
                  <div className="text-gray-600 text-sm">Average Delivery</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{subscriberCount.toLocaleString()}+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">4.9★</div>
                  <div className="text-gray-600 text-sm">Rating</div>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${visibleSections['home'] || isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-red-200 rounded-3xl transform rotate-6 hover:rotate-3 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-center">
                    <div className="text-8xl mb-6 animate-bounce hover:animate-spin transition-all duration-300">🍽️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Quality</h3>
                    <p className="text-gray-600 mb-6">Fresh ingredients, expert chefs, perfect delivery</p>
                    <div className="flex justify-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Leaf className="h-4 w-4 text-green-500 mr-1" />
                        Fresh
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Shield className="h-4 w-4 text-blue-500 mr-1" />
                        Safe
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Zap className="h-4 w-4 text-yellow-500 mr-1" />
                        Fast
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-4 shadow-lg animate-float hover:scale-110 transition-all duration-300">
                  <Clock className="h-6 w-6 mb-2 mx-auto" />
                  <div className="text-sm font-semibold text-center">Fast Delivery</div>
                  <div className="text-xs text-center opacity-90">25 min average</div>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl p-4 shadow-lg animate-float-delayed hover:scale-110 transition-all duration-300">
                  <Star className="h-6 w-6 mb-2 mx-auto" />
                  <div className="text-sm font-semibold text-center">Top Rated</div>
                  <div className="text-xs text-center opacity-90">4.9/5 stars</div>
                </div>
                <div className="absolute top-1/2 -right-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-4 shadow-lg animate-pulse hover:scale-110 transition-all duration-300">
                  <Gift className="h-6 w-6 mb-2 mx-auto" />
                  <div className="text-sm font-semibold text-center">Special Offers</div>
                  <div className="text-xs text-center opacity-90">Daily deals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section id="popular" className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['popular'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Most Popular
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Favorites</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most loved dishes, carefully crafted and highly rated by our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.filter(item => item.isPopular).map((item, index) => (
              <div key={item.id} className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${visibleSections['popular'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                   style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      🔥 Popular
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex item-start justify-center mb-4">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-500">
                        <img src={item.image} alt={item.name} className="h-40  object-cover mx-auto" />

                        
                      </div>
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="p-2 text-gray-400 hover:text-orange-500 transition-colors hover:bg-orange-50 rounded-lg"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{item.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Rs{item.price}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                      >
                        <Plus className="h-4 w-4" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" data-animate>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Smartphone className="h-4 w-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to get your favorite food delivered to your doorstep
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className={`text-center group transition-all duration-1000 ${visibleSections['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                     style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-8 transform -translate-x-4">
                      <ArrowRight className="h-6 w-6 text-gray-300 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['achievements'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4 mr-2" />
              Our Achievements
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FreshBite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className={`bg-white border border-gray-200 rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${visibleSections['achievements'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                     style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="mb-6">
                    <Icon className={`h-12 w-12 ${achievement.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                      {achievement.number}
                    </div>
                    <div className="text-gray-600 font-medium">{achievement.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden" data-animate>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['testimonials'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="h-4 w-4 mr-2" />
              Customer Reviews
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from real people who love FreshBite
            </p>
          </div>

          <div className="relative">
            <div className={`transition-all duration-1000 ${visibleSections['testimonials'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-6xl mb-4">{testimonials[currentTestimonial].image}</div>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${visibleSections['about'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <Leaf className="h-4 w-4 mr-2" />
                About FreshBite
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Fresh Ingredients, Expert Preparation</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At FreshBite, we believe that great food starts with great ingredients. Our team of expert chefs 
                carefully selects the freshest produce, premium meats, and authentic spices to create dishes that 
                not only taste amazing but nourish your body and soul.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh & Organic</h3>
                    <p className="text-gray-600">We source our ingredients from local farms and trusted suppliers to ensure maximum freshness and quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
                    <p className="text-gray-600">Our kitchen maintains the highest hygiene standards and follows strict safety protocols for food preparation and delivery.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Made with Love</h3>
                    <p className="text-gray-600">Every dish is prepared with passion and attention to detail, ensuring you get the best dining experience at home.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${visibleSections['about'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-4xl mb-4">👨‍🍳</div>
                      <h4 className="font-bold text-gray-800">Expert Chefs</h4>
                      <p className="text-sm text-gray-600 mt-2">Professional culinary experts with years of experience</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-4xl mb-4">🌱</div>
                      <h4 className="font-bold text-gray-800">Organic Ingredients</h4>
                      <p className="text-sm text-gray-600 mt-2">Fresh, locally sourced organic produce</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-4xl mb-4">🚚</div>
                      <h4 className="font-bold text-gray-800">Fast Delivery</h4>
                      <p className="text-sm text-gray-600 mt-2">Quick and reliable delivery service</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-4xl mb-4">⭐</div>
                      <h4 className="font-bold text-gray-800">5-Star Rating</h4>
                      <p className="text-sm text-gray-600 mt-2">Consistently high customer satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden" data-animate>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${visibleSections['newsletter'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-6xl mb-6">📧</div>
            <h2 className="text-4xl font-bold text-white mb-4">Stay Updated with FreshBite</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new dishes, special offers, and exclusive deals!
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-orange-500 px-8 py-4 rounded-r-lg font-semibold hover:bg-orange-50 transition-colors duration-300 flex items-center"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </form>
            
            <p className="text-orange-200 text-sm mt-4">
              Join {subscriberCount.toLocaleString()}+ food lovers who trust FreshBite
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['contact'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Phone className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Reach out to us anytime!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className={`transition-all duration-1000 ${visibleSections['contact'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Kitchen</h3>
                    <p className="text-gray-600">123 Gourmet Street, Food District<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600">+91 723-4567<br />Available 24/7 for orders and support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600">hello@freshbite.com<br />support@freshbite.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Follow Us</h3>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Facebook</a>
                      <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Instagram</a>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${visibleSections['contact'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={4}
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

     {/* Footer */}
<footer className="bg-gray-900 text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <ChefHat className="h-6 w-6 text-white" />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">FreshBite</div>
        </div>
        <p className="text-gray-400 mb-6">
          Delivering fresh, delicious meals to your doorstep. Quality ingredients, expert preparation, fast delivery.
        </p>
        
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
        <ul className="space-y-3">
          <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(true)} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Menu</a></li>
          <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-6">Services</h3>
        <ul className="space-y-3">
          <li><span className="text-gray-400">Food Delivery</span></li>
          <li><span className="text-gray-400">Catering Services</span></li>
          <li><span className="text-gray-400">Party Orders</span></li>
          <li><span className="text-gray-400">Corporate Lunch</span></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-orange-500" />
            <span className="text-gray-400">123 Gourmet Street, Greater Noida</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-orange-500" />
            <span className="text-gray-400">+91 7123-4567</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-orange-500" />
            <span className="text-gray-400">hello@freshbite.com</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 mb-4 md:mb-0">
          © 2025 FreshBite. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>

            Floating Action Button
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-2xl hover:shadow-orange-300 transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <ChefHat className="h-8 w-8 group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>

      {/* Back to Top Button */}
        return (
    <div>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

       </div>
  );


      {/* Success Toast */}
      {/* {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeInUp">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>Added to cart successfully!</span>
          </div>
        </div>
    )} */}

      {/* Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 backdrop-blur bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
              <h2 className="text-2xl font-bold text-gray-900">Our Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                      <img src={item.image} alt={item.name} className='h-48' />

                      {/* <div>{item.image}</div> */}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-orange-500">Rs{item.price}</span>
                        <button 
                          onClick={() => {
                          addToCart(item);
                          }}
                          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default FoodDeliveryWebsite;