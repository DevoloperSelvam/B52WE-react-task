
import './App.css'
import PropTypes from "prop-types";


const plans = [
  {
    title: 'Free',
    price: '$0/month',
    features: ['Single User', '5GB Storage', 'Unlimited Public Projects', 'Community Access',
      'Unlimited Private Projects', 'Deedication Private Projects', 'Free Subdomain', 'Monthly States Report']
  },
  {
    title: 'Plus',
    price: '$9/month',
    features: ['5 User', '50GB Storage', 'Unlimited Public Projects', 'Community Access',
      'Unlimited Private Projects', 'Deedication Private Projects', 'Free Subdomain', 'Monthly States Report'],
  },
  {
    title: 'Pro',
    price: '$49/month',
    features: ['Unlimited Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access',
      'Unlimited Private Projects', 'Deedication Private Projects', 'Free Subdomain', 'Monthly States Report'],
  },
];

const PriceCard = ({ plan }) => (

  <div className="card">
    <h4>{plan.title}</h4>
    <h1>{plan.price}</h1>
    {plan.features.map((feature, index) => (
      <p className='check' key={index}>{feature}</p>
    ))}
    <button className='new'>BUTTON</button>
  </div>
);


const App = () => (
  <div className="app">
    {plans.map((plan, index) => (
      <PriceCard key={index} plan={plan} />
    ))}
  </div>
);

PriceCard.propTypes = {
  plan: PropTypes.string

}

export default App;

