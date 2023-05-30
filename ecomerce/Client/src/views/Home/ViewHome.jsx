import Home from '../../components/Home/Home';
import CardsProduct from '../../components/CardsProduct/CardsProduct';
import { useNavigate } from 'react-router-dom'

const products = [
    {id:1,name: 'Zapatillas nike negras', price: 1000, image:'https://firebasestorage.googleapis.com/v0/b/app-keepers.appspot.com/o/image-PhotoRoom%207.png?alt=media&token=6ea0c1a8-4f4f-454d-8a01-8358012f4f63&_gl=1*1wkznzv*_ga*MTMyNjgzMDA1LjE2ODAyMzYxMDA.*_ga_CW55HF8NVT*MTY4NTQyNTY3NC4zLjEuMTY4NTQyNTc2My4wLjAuMA..'},
    {id:2,name: 'Zapatillas nike negras', price: 1000, image:'https://firebasestorage.googleapis.com/v0/b/app-keepers.appspot.com/o/image-PhotoRoom%207.png?alt=media&token=6ea0c1a8-4f4f-454d-8a01-8358012f4f63&_gl=1*1wkznzv*_ga*MTMyNjgzMDA1LjE2ODAyMzYxMDA.*_ga_CW55HF8NVT*MTY4NTQyNTY3NC4zLjEuMTY4NTQyNTc2My4wLjAuMA..'},
    {id:3,name: 'Zapatillas nike negras', price: 1000, image:'https://firebasestorage.googleapis.com/v0/b/app-keepers.appspot.com/o/image-PhotoRoom%207.png?alt=media&token=6ea0c1a8-4f4f-454d-8a01-8358012f4f63&_gl=1*1wkznzv*_ga*MTMyNjgzMDA1LjE2ODAyMzYxMDA.*_ga_CW55HF8NVT*MTY4NTQyNTY3NC4zLjEuMTY4NTQyNTc2My4wLjAuMA..'},
    {id:4,name: 'Zapatillas nike negras', price: 1000, image:'https://firebasestorage.googleapis.com/v0/b/app-keepers.appspot.com/o/image-PhotoRoom%207.png?alt=media&token=6ea0c1a8-4f4f-454d-8a01-8358012f4f63&_gl=1*1wkznzv*_ga*MTMyNjgzMDA1LjE2ODAyMzYxMDA.*_ga_CW55HF8NVT*MTY4NTQyNTY3NC4zLjEuMTY4NTQyNTc2My4wLjAuMA..'},
]

//<Home/>
const ViewHome =()=>{
    const navigate = useNavigate()
    const go = (ruta) => {
        navigate(ruta)
    }
    const seeDetailsHandler = () => {
        alert('Shoop')
    }
    return(
        <div>
            <Home/>
            <div className='h-[60vh] w-auto'></div>

            <div className='h-[70vh] w-auto flex flex-col justify-center items-center mx-[60px]'>
                <div className='h-40 w-full flex justify-start'>
                    <h2 className='text-[40px] text-white'>
                        New <strong className='text-teal-400'> styles </strong> just arrive
                    </h2>
                </div>
                <div className='flex flex-row gap-4 justify-center items-center overflow'>
                    {products.map((product, index) => {
                        return(
                            <CardsProduct 
                                key={product.id}
                                name={product.name} 
                                price={product.price} 
                                image={product.image} 
                                addToCart={seeDetailsHandler} 
                                seeDetails={() => go(`/product/${product.id}`)}  
                            />
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default ViewHome;