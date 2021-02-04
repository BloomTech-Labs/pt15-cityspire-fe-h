import axios from 'axios';
import { CityContext } from '../state/contexts';

const cityOnSubmit = setter => {
  // axios.get()
  // .then(res=>{
  //     setter(res.data)
  // })
  // .catch(err=>{
  //     console.error(err);
  // })

  console.log('submitted');
};

export default cityOnSubmit;
