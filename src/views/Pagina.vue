<template>
  <div id="app">
     <!-- main banner -->
            <div class="main-top" id="home">
        
                <!-- componente social-bar -->
                <px-social-bar />
                <!-- componente Px header -->
    
            
                <!-- banner -->
                    <px-banner />
                <!-- //banner -->
            </div>
        
            <!-- //main banner -->
            <!-- middle -->
                <px-section-ofrecemos />
            <!-- //middle -->
            <!-- what we do section -->
                <px-section-ciclos /> 
            <!-- //what we do section -->
            
            <!-- services -->
                <px-section-servicios />
            <!-- //services -->
            
            <!-- partners -->
                <px-section-elegirnos />
            <!-- //partners -->
            
            <!-- copyright bottom -->
                <px-footer />
            <!-- //copyright bottom -->
    </div>
</template>

<script>


import PxSocialBar from '@/components/partes-pagweb/PxSocialBar';
import PxBanner from '@/components/partes-pagweb/PxBanner';
import PxSectionOfrecemos from '@/components/partes-pagweb/PxSectionOfrecemos';
import PxSectionCiclos from '@/components/partes-pagweb/PxSectionCiclos';
import PxSectionServicios from '@/components/partes-pagweb/PxSectionServicios';
import PxSectionElegirnos from '@/components/partes-pagweb/PxSectionElegirnos';
import PxFooter from '@/components/partes-pagweb/PxFooter'; 

export default {
    name: 'Pagina',
      components: {
      PxSocialBar,
      PxBanner,
      PxSectionOfrecemos,
      PxSectionCiclos,
      PxSectionServicios,
      PxSectionElegirnos,
      PxFooter
  }
}
</script>