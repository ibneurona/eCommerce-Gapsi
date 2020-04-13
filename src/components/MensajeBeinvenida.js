import React,{useState,useEffect} from 'react';

const MensajeBienvenida = () => {

  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const requestOpt = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      Accept: 'application/json',
      mode: 'cors',
    };
    fetch('https://node-red-nxdup.mybluemix.net/visitor',requestOpt)
    .then(res => res.json())
    .then(res => {
      //console.log(res)
      setMsg(res.data.welcome)
    });
  }, []);

  return(
    <div className="d-flex">
      <div className="mx-auto">
        <h2>
          {msg}
        </h2>
      </div>
    </div>
  );

}
export default MensajeBienvenida;