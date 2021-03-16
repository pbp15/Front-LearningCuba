<template>
<div id="app">
        <div class="main-top" id="home">
        
                <!-- componente social-bar -->
                <px-social-bar />
                <!-- componente Px header -->    
                <px-header />
        </div>
   <div class="banner_w3lspvt-2">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html" class="font-weight-bold">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Propuesta Educativa</li>
    </ol>
    </div>

<div class="about-inner py-5">
    <div class="container pb-xl-5 pb-lg-3">
        <div class="row py-xl-4">
            <div class="col-lg-6 welcome-right text-center mt-lg-0 mt-5">
                <img src="images/pro1.jpg" alt="" class="img-fluid" />
            </div>
            <div class="col-lg-6 about-right-faq pr-5">            
                <h3 class="mt-2 mb-3">Propuesta Educativa</h3>
                <p class="mb-3 text-justify"> Nuestra propuesta educativa tiene como propósito principal la formación integral de nuestros estudiantes; por ello 
                    consideramos que  se debe promover el desarrollo de las capacidades cognitivas  conjuntamente de la mano de la tecnología , como un importante que
                    palancador para mejorar el aprendijaje, donde el trabajo cooperativo permita convertir a los estudiantes en agentes activos de su aprendizaje,  fortaleciendo así la práctica de valores
                      con sensibilidad y compromiso, permitiendo lograr el perfil de un estudiante con las cualidades personales  necesarias para afrontar los retos de la vida y que la sociedad le proponga..</p>
            

                <strong class="mt-2">Para el Team LearningCuba </strong>
                <p class="mt-2 mb-3 text-justify ">Consideramos que cada estudiante es un reto y somos parte de ello brindando cada día nuestros conocimientos y habilidades
                    con mucho espiritu de superacion y perseverancia.</p>               
               
     
            </div>
       
        </div>
    </div>
</div>


        <px-footer />

</div>
</template>




<script>
import PxHeader from '@/components/partes-pagweb/PxHeader';
import PxSocialBar from '@/components/partes-pagweb/PxSocialBar';
import PxFooter from '@/components/partes-pagweb/PxFooter';

export default {
    name: 'Propuesta',
        components : {
            PxHeader,
            PxSocialBar,
            PxFooter
            
        }
}
</script>