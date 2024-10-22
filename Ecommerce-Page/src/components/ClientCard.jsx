import {clients} from '../assets/images/index'


const ClientCard = () => {
    console.log(clients);
  return (
    <>
    <div>
        <div className="flex flex-wrap -m-4">
            {clients.map((client, index)=>(
                <div key={index} className="p-4 border-gray-200 rounded-lg lg:w-1/4 md:w-1/2">
                    <div className="h-full flex flex-col border-2  items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-full w-1/2 h-56 border-2 border-orange-500 object-cover object-center mb-4" src={client.img}/>
                        <div className="w-full">
                            <h2 className="title-font font-medium bg-orange-500 text-lg text-white">{client.name}</h2>
                            <p className="text-gray-500">{client.date}</p>
                            <p className="text-gray-500">{client.review}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    </div>
    </>
  )
}

export default ClientCard