import axios from 'axios';
// added a formater peram, that takes the function that formats the data for the component we are passing it to
const locationOnSubmit = (formatter, state_setter, value) => {
  const reqArr = value.split(', ');
  const reqBody = {
    city_name: reqArr[0],
    state_name: reqArr[1],
  };
  let info = null;
  axios
    .post('https://h-ds2.cityspire.dev/location', reqBody)
    .then(res => {
      console.log(res.data);
      //first we format the data
      const new_value = formatter(JSON.parse(res.data)[0]);
      //then pass it to state.
      console.log(new_value);
      info = new_value;
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      state_setter(info);
    });

  console.log('submitted');
};

export default locationOnSubmit;
