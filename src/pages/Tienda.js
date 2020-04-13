import React,{useState,useEffect} from 'react';
import Carrito from '../components/Carrito';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


const Tienda = () => {
  
  const [categoria, setCategoria] = useState("");
  const [myproduct,setMyProduct] = useState([]);
  const [pagesNumber,setPagesNumber] = useState(1);
  const classes = useStyles();

  const handleOnChange = (e) => {
    e.preventDefault();
    const  valor = e.target.value;
    //console.log(valor);
    setCategoria(valor);
  };

  function handleScroll () {
    window.addEventListener('scroll',() =>{
      const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
      //console.log({scrollTop, scrollHeight, clientHeight})
    
      if(clientHeight + scrollTop >= scrollHeight){
        console.log('bottom'); 
        setPagesNumber(pagesNumber + 1);   
      }
    });
  };

  useEffect(() =>{

    const requestOpt = {
      method: 'GET',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      Accept: 'application/json',
      mode: 'cors',
      Origin: 'https://node-red-nxdup.mybluemix.net/productos/'
    };

    fetch (`https://node-red-nxdup.mybluemix.net/productos/${categoria}/${pagesNumber}`,requestOpt)
    .then(response => response.json())
    .then(res => {
      console.log(res.data);
      //console.log(res.data.products.length);
      setMyProduct(res.data.products);
    });
  },[categoria,pagesNumber]);

  return (
    <div className="container-fluid">  
      
      <div className="d-flex justify-content-end">
        <Carrito/>
      </div>
      <br/>
      
      <div className="d-flex justify-content-center">
        <div>
          <label className="d-flex justify-content-center" htmlFor="buscador">Encuentra lo que necesitas!</label> <br/>
          <input 
            id="buscador"
            name="buscador"
            type="text"
            onChange = {handleOnChange}
            placeholder="Busca un prodcuto..."
          />
        </div> 
      </div>
      <br/>

      <div className="d-flex">
        <div className="row">
          { 
            myproduct.map((product) => {
              return (
                <div className="col-4 my-3 mx-auto" key={product.ID+1}>
                  <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt={product.NAME}
                          height="300"
                          image={product.IMAGE}
                          title={product.NAME}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {product.NAME + " " + product.ID} 
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {product.DESCRIPTION}
                          </Typography>
                          <Typography variant="body" color="textSecondary" component="p">
                            SKU: {product.SKU}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Typography variant="body2" color="textPrimary" component="p" >
                          PRECIO: ${product.PRICE}
                        </Typography>
                        <Button size="medium" color="primary" align="right">
                          Comprar
                        </Button>
                      </CardActions> 
                    </Card>
                  </div>  
              )
            })
          }
        </div>
      </div> 
    </div>
   );
}
 
export default Tienda;