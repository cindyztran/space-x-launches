    //Pseudocode
    // 1) Page Loads - Fetch data from SpaceX APO
    // 2) Store resultin data in a list (Array) so we can loop over and create the UI
    // 3) Using the data to create UI and append to the DOM

    // Constants
    const BASE_URL = 'https://api.spacexdata.com/v3/launches';



    // app's state (variables)

    //launches is the array
    let launches; 


    //cached element references
    const $main = $('main');



    //event listeners



    //functions
    getAppData();
    
    function getAppData() {
        $.ajax(
            `${BASE_URL}?limit=9&order=desc`
            ).then(
                function(data) { 
                    launches = data;
                    render();
            });

    }

    //for visualization. 
    //launch is each object in the array 
    function render(){
        const html = launches.map(function(launch) {
            return `<article> 
                    <h2>${launch.mission_name}</h2>
                    <p>${launch.launch_year}</p>
                </article>
                `;
                
        });
        $main.html(html);
    }