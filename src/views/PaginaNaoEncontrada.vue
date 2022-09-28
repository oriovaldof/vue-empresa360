<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center row">
                <div class=" col-md-6">
                    <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                        class="img-fluid">
                </div>
                <div class=" col-md-6 mt-5">
                    <p class="fs-3"> <span class="text-danger">Opps!</span> Pagina não Existe.</p>
                    <p class="lead">
                        Esta pagina que vc esta tentando acessar não existe
                    </p>
                    
                    <button class="btn btn-primary" @click="$router.replace('/')">Ir para Home</button>
                </div>

            </div>
        </div>
</template>