

import React, { useState } from "react";


let temporizador = null;



const Semaforo = () => {


    const [colorActivo, setColorActivo] = useState("bg-danger");

    const [crearLuz, setLuz] = useState(false);

    const bordes = {
        "bg-danger": { backgroundColor: "#e62e2e", boxShadow: "0 0 50px white" },
        "bg-warning": { backgroundColor: "#ffd966", boxShadow: "0 0 50px white" },
        "bg-success": { backgroundColor: "#61e871", boxShadow: "0 0 50px white" },
        "purple": { backgroundColor: "#8361e8", boxShadow: "0 0 50px white" }


    };





    


    const cambiarColor = () => {


        console.log(cambiarColor);

        
        if (colorActivo === "bg-danger") {

            setColorActivo("bg-warning");

        }
        else if (colorActivo === "bg-warning") {

            setColorActivo("bg-success");



        } else if (colorActivo === "bg-success") {

            setColorActivo("bg-danger");



        }else if(colorActivo === "purple"){


            setColorActivo("bg-danger");
        }






    }

    const agregarLuz = () => {


        console.log("Crear Luz");
        setLuz(!crearLuz);
        setColorActivo("purple");


    }








    return (

        <div className="container d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}}>



            <div className="bg-black d-flex justify-content-center align-items-center flex-column " style={{ height: crearLuz ? "450px": "350px", width: "200px"}}>

                <div className={` d-flex border rounded-circle mb-3`} style={{ height: "100px", width: "100px", ...(colorActivo === "bg-danger" ? bordes["bg-danger"] : { backgroundColor: "#e62e2ead" }) }}>

                </div >

                <div className={`  d-flex border rounded-circle mb-3`} style={{ height: "100px", width: "100px", ...(colorActivo === "bg-warning" ? bordes["bg-warning"] : { backgroundColor: "#ffd966a2" }) }}>

                </div >

                

                <div className={`d-flex border rounded-circle mb-1`} style={{ height: "100px", width: "100px", ...(colorActivo === "bg-success" ? bordes["bg-success"] : { backgroundColor: "#5eff939d" }) }}>

                </div >


                {crearLuz && (


                    <div className={`d-flex border rounded-circle mt-1`} style={{ height: "100px", width: "100px", ...(crearLuz ? bordes["purple"] : {} )}}>

                    </div >





                )



                }




            </div>




            <div className="d-flex mt-3 gp-3 flex-column justify-content-center align-items-center" >
                <button className="d-flex mb-1 align-items-center" onClick={cambiarColor} style={{height: "40px"}}>Presione para Cambiar color</button>
                <button className="d-flex" style={{}} onClick={agregarLuz}  >Agrega Luz/Quitar Luz</button>
            </div>




        </div>








    )


}


export default Semaforo;
