<template>
  <div id="app">
        <div class="main-top" id="home">
        
                <!-- componente social-bar -->
                <px-social-bar />
                <!-- componente Px header -->    
                <px-header />
        </div>

	<div class="row">
		<div class="col">
			<ul v-for="(profesor , index) in profesores" :key="`${index}-prof`">
				<li>ID: {{profesor.id}}</li>
				<li>NOMBRES: {{profesor.nombres}}</li>
				<li>CURSO: {{profesor.curso_cargo}}</li>
				<li>NIVEL: {{profesor.nivel}}</li>
				<li>IMAGEN: {{profesor.imagen}}</li>
			</ul>
		</div>
	</div>

    <div class="banner_w3lspvt-2">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html" class="font-weight-bold">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Contactanos</li>
        </ol>
    </div>

    <div class="contact py-5" id="contact">
	<div class="container pb-xl-5 pb-lg-3">
		<div class="row">
			<div class="col-lg-6">
				<img src="images/b2.png" alt="image" class="img-fluid" />
			</div>
			<div class="col-lg-6 mt-lg-0 mt-5">
				<!-- contact form grid -->
				<div class="contact-top1">
				
						<div class="form-group">
							<div class="row">
								<div class="col-md-6">
									<label>
										apellidos
									</label>
									<input class="form-control" type="text"  v-model="apellidos"  placeholder="Anderson" name="name" required="">
								</div>
								<div class="col-md-6 mt-md-0 mt-4">
									<label>
										nombres
									</label>
									<input class="form-control" type="text"  v-model="nombres"  placeholder="John" name="name" required="">
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="row">
								<div class="col-md-6">
									<label>
										dni
									</label>
									<input class="form-control" type="text"  v-model="dni"  placeholder="xxxx xxxx xx" name="mobile" required="">
								</div>
								<div class="col-md-6 mt-md-0 mt-4">
									<label>
										email
									</label>
									<input class="form-control" type="email"  v-model="email"  placeholder="example@mail.com" name="email" required="">
								</div>
							</div>
						</div>

						<div class="form-group">
							<div class="row">
								<div class="col-md-6">
									<label>
										fehca naciemiento
									</label>
									<input class="form-control" type="date"  v-model="fecha_nacimiento"  placeholder="Anderson" name="name" required="">
								</div>
								<div class="col-md-6 mt-md-0 mt-4">
									<label>
										celular
									</label>
									<input class="form-control" type="text"  v-model="celular"  placeholder="John" name="name" required="">
								</div>
							</div>
						</div>

						<div class="form-group">
							<div class="row">
								<div class="col-md-6">
									<label>
										servicio
									</label>
									<input class="form-control" type="text"  v-model="tipo_servicio"  placeholder="Anderson" name="name" required="">
								</div>
								<div class="col-md-6 mt-md-0 mt-4">
									<label>
										canal
									</label>
									<input class="form-control" type="text"  v-model="comoseentero"  placeholder="John" name="name" required="">
								</div>
							</div>
						</div>

						
						<div class="row mt-3">
							<div class="col-md-12">
								<button @click="contactanos" class="btn btn-cont-w3 btn-block mt-4">Send</button>
							</div>
						</div>
				</div>
				<!-- //contact form grid ends here -->
			</div>
		</div>

		<div class="row pt-5">
			<div class="col">
				<div class="card">
					<h1>PETICIONES AJAX AXIOS</h1>

					<h2>PETICIONES GET</h2>
					<button @click="request"> HACER PETICION GET</button>
					
					<br/>
					
					<h2>PETICIONES POST</h2>
					<button @click="contactanos"> HACER PETICION POST</button>

					




				</div>
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

import axios from 'axios';

export default {
    name: 'Contactanos',
	components : {
		PxHeader,
		PxSocialBar,
		PxFooter
	},

	data() {
		return {
			profesores: [],


			//FORM
			apellidos : '',
			nombres : '',
			dni : '',
			fecha_nacimiento : '',
			email : '',
			celular : '',
			tipo_servicio : '',
			comoseentero : '',

			//DETELE
			id_profesor: '',
		}
		
	},

	methods: {
		request( ){
			
			let headers = {
				'Accept' : 'application/json',
				'Authorization' : 'Bearer 1|vQPhbmYfixCdelnCGspfBsdLW0IbiqeHzTvajpTC'
			}

			axios.get('http://127.0.0.1:8000/api/profesores/inicial', {headers} )
				.then( res => {
					console.log(res.data.profesores)
					this.profesores = res.data.profesores
				})
				.catch( err => {
					console.log(err.response)
				})
				.finally( () => {
					window.alert('peticion terminada')
				})



		},

		contactanos(){

			let contactoForm = new FormData()
			// contactoForm.append('method','put' )
			contactoForm.append('apellidos', this.apellidos )
			contactoForm.append('nombres', this.nombres )
			contactoForm.append('dni', this.dni )
			contactoForm.append('fecha_nacimiento', this.fecha_nacimiento )
			contactoForm.append('email', this.email )
			contactoForm.append('celular', this.celular )
			contactoForm.append('tipo_servicio', this.tipo_servicio )
			contactoForm.append('comoseentero', this.comoseentero )

			axios.post('http://127.0.0.1:8000/api/contactanos', contactoForm)
				.then( res => {
					console.log(res)
				})
				.catch( err => {
					console.log(err.response.data)
				})
				.finally( () => {
					window.alert('peticion terminada')
				})





			// DELETE

			let headers = {
				'Accept' : 'application/json',
				'Authorization' : 'Bearer 1|vQPhbmYfixCdelnCGspfBsdLW0IbiqeHzTvajpTC'
			}

			axios.delete(`http://127.0.0.1:8000/api/profesor/inicial/${this.id_profesor}`, {headers})
				


		}
	}




}
</script>