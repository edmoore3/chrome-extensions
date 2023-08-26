console.log("HELLLO");

searchTrue = document.getElementsByClassName("modal_search_active");
while(true)
{
    console.log(searchTrue);
    await new Promise(r => setTimeout(r, 2000)); // Pause 2 seconds
}