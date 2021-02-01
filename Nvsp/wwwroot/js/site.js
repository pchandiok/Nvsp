// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var triggerTabList = [].slice.call(document.querySelectorAll('#nav-tab a'))
triggerTabList.forEach(triggerEl =>
    {
        var tabTrigger = new bootstrap.Tab(triggerEl)

        triggerEl.addEventListener('click', event =>
        {
            event.preventDefault()
            tabTrigger.show()
            tabTrigger.style.class = "nav-link active";
        })
    });

    // var Details = document.querySelector('#nav-tab a[href="#nav-home"]')
    // bootstrap.Tab.getInstance(Details).show() // Select tab by name
    
    // var EpicNumber = document.querySelector('#nav-tab a[href="#nav-profile"]')
    // bootstrap.Tab.getInstance(EpicNumber).show() // Select tab by name
    

