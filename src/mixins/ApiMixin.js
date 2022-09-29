export default {
    data: () => ({
        dados: {},
    }),
    methods: {
        getDadosApi(url,queryParams = {}) {

            Object.keys(queryParams).forEach(key => {
                if(queryParams[key] == '') delete queryParams[key];
              });
              const urlQueryParams = new URLSearchParams(queryParams).toString();

              const urlCompleta = urlQueryParams ? `${url}&${urlQueryParams}`:url;

            fetch(urlCompleta)
                .then((response) => response.json())
                .then((response) => {
                    // console.log(response)
                    this.dados = response;
                });
        },
    },
}