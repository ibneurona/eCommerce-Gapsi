import React,{useEffect,useState} from 'react';


const Version = () =>{
  const [msgVersion, setMsgVersion] = useState(null);

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
     // console.log(res)
      setMsgVersion(res.data.version)
    });
  }, []);

  return(
    <div className="row">
      <div className="d-block w-50 mx-auto">
        <div className="card p-2 my-5">
          <div clasName="card-body">
            <p className="card-text text-center">{msgVersion}</p>
          </div>
        </div> 
      </div>
    </div>
  );

}

export default  Version;