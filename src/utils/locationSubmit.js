import axios from 'axios';

const locationOnSubmit = (setter, value) => {
  const reqArr = value.split(', ');
  const reqBody = {
    city_name: reqArr[0],
    state_name: reqArr[1],
  };
  axios
    .post('https://h-ds2.cityspire.dev/location', reqBody)
    .then(res => {
      console.log(res.data);
      setter(JSON.parse(res.data)[0]);
    })
    .catch(err => {
      console.error(err);
    });

  console.log('submitted');
};

export default locationOnSubmit;
