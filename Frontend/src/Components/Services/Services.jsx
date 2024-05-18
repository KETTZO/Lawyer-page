import Navigation_Bar from '../Navigation_Bar/Navigation_Bar'
import ServiceCard from './ServiceCard'

function Services() {

  return (
    <>
    <Navigation_Bar/>
    <body>
        
        <div className='encabezado'>
            <div className='bg-image'> </div>
            <h1>Servicios</h1>
            <p>En nuestro despacho jurídico, ofrecemos una amplia gama de servicios legales especializados en derecho familiar e inmobiliario para brindarte la tranquilidad y seguridad que necesitas en situaciones importantes de tu vida.</p>
        </div>
        <div className='servicios'>
        <ServiceCard
            title="Divorcio"
            description="$2,500 MXN"
            imageUrl="https://cdn-icons-png.freepik.com/512/3616/3616516.png"
        />
        <ServiceCard 
            title="Amparo"
            description="$5,500 MXN"
            imageUrl="https://media.istockphoto.com/id/1027738048/vector/scale-icon.jpg?s=612x612&w=0&k=20&c=6Z4hDKIOKFTuRVorZcbA0Qeg_-FTsibJiDLs-1q281Y="
        />
        <ServiceCard 
            title="Custodia"
            description="$2,500 MXN"
            imageUrl="https://static-00.iconduck.com/assets.00/house-icon-512x471-t03b54sj.png"
        />
        <ServiceCard 
            title="Inmobiliario"
            description="$2,500 MXN"
            imageUrl="https://static.vecteezy.com/system/resources/previews/009/767/092/original/family-icon-family-symbol-illustration-free-vector.jpg"
        />
        <ServiceCard 
            title="Escrituraciones"
            description="$2,500 MXN"
            imageUrl="https://static.vecteezy.com/system/resources/previews/021/390/581/non_2x/history-writing-icon-simple-thin-line-outline-of-history-icons-vector.jpg"
        />
        <ServiceCard 
            title="Juicios hipotecarios"
            description="$2,500 MXN"
            imageUrl="https://as1.ftcdn.net/v2/jpg/03/92/44/28/1000_F_392442807_YyIcaP5ggjTG3kfey6e8ngWzVBUVVktt.jpg"
        />
        <ServiceCard 
            title="Compra-venta de inmuebles"
            description="$2,500 MXN"
            imageUrl="https://cdn-icons-png.flaticon.com/512/1191/1191557.png"
        />
        <ServiceCard 
            title="Pensión custodia"
            description="$2,500 MXN"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RWdpcIBoiy_pLbuj-GBIFkT8GALuOpaiP08N0Tl2GA&s"
        />
      
        
        </div>
    </body>
    <footer>
        <p>© 2024 Abogadas Asociadas - Derecho familiar e inmobiliaro.</p>
    </footer>
    
    </>
    

  )
}

export default Services