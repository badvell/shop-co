const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div
        className={
          activeTab === 'details' ? 'active tab__tabs-item' : 'tab__tabs-item'
        }
        onClick={() => setActiveTab('details')}
      >
        Product Details
      </div>
      <div
        className={
          activeTab === 'reviews' ? 'active tab__tabs-item' : 'tab__tabs-item'
        }
        onClick={() => setActiveTab('reviews')}
      >
        Rating & Reviews
      </div>
      <div
        className={
          activeTab === 'faqs' ? 'active tab__tabs-item' : 'tab__tabs-item'
        }
        onClick={() => setActiveTab('faqs')}
      >
        FAQs
      </div>
    </>
  );
};

export default Tabs;
