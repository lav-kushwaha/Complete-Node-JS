import {BASE_URL} from '../utils/Constant'
import { useSelector } from 'react-redux';

const Premium = () => {
   
  const handleBuyClick = async(type)=>{
      const order = axios.post(BASE_URL + "/payment/create",{ 
        membershipType:type,
      },{Credential:true});

  }

  return (
    <div className="m-6">
      <h1 className="text-center text-2xl font-bold mb-8">
        Choose Your Membership
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
        <div className="card bg-base-300 rounded-box p-6 flex-1">
          <h2 className="font-bold text-xl text-center mb-4">Silver Membership</h2>
          <ul className="mb-4 space-y-1">
            <li>- Chat with other people</li>
            <li>- 100 connection requests per day</li>
            <li>- Blue Tick</li>
            <li>- 3 months</li>
          </ul>
          <button onClick={()=>handleByClick("Silver")} className="btn btn-secondary w-full">Buy Silver</button>
        </div>

        <div className="divider lg:divider-horizontal">OR</div>


        <div className="card bg-base-300 rounded-box p-6 flex-1">
          <h2 className="font-bold text-xl text-center mb-4">Gold Membership</h2>
          <ul className="mb-4 space-y-1">
            <li>- Chat with other people</li>
            <li>- Infinite connection requests per day</li>
            <li>- Blue Tick</li>
            <li>- 6 months</li>
          </ul>
          <button onClick={()=>handleByClick("Gold")} className="btn btn-primary w-full">Buy Gold</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
