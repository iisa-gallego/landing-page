  function getParam(){
        const url = window.location.search;
        const searchParams = new URLSearchParams(url);

    }

    function getProduct(){
        const productId = getParam("id"); //http
        const docRef = doc(db)
    }

    getParam(id)