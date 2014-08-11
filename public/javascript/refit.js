window.onload = function() {
    document.getElementById("services_link").addEventListener("click", function(e) {
        document.getElementById('services').scrollIntoView();
    });

    document.getElementById("contacts_link").addEventListener("click", function(e) {
        document.getElementById('contacts').scrollIntoView();
    });
};