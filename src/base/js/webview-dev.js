webview = document.querySelector('webview')
var penpotEmbed = document.getElementById('penpot');
var changelog = document.getElementById('changelog');

// CSS Injection - Including Dark Mode
penpotEmbed.addEventListener('dom-ready', function () {
    penpotEmbed.insertCSS(`
    html.windows [data-for-os=mac], html.windows [data-for-os=linux] {display: none;}
    html.mac [data-for-os=windows], html.mac [data-for-os=linux] {display: none;}
    html.linux [data-for-os=mac], html.linux [data-for-os=windows] {display: none;}

    /* Bringing dark mode, to the dashboard */
    /* It's what we want, so let's add it! */

    :root {
        --primary: #343434;
        --secondary: #2e2e2e;
    }

    .dashboard-layout {background: var(--primary) !important}
    .dashboard-layout h1,
    .dashboard-layout h2,
    .dashboard-layout h3,
    .dashboard-layout p,
    .dashboard-layout li,
    .dashboard-layout span,
    .dashboard-layout i,
    .dashboard-layout svg
    {color: white !important}

    /* Login Screen */
    .auth-content {background: var(--secondary) !important}

    .auth-content h1,
    .auth-content h2,
    .auth-content span,
    .auth-content p
    {color: white !important}

    /* Dashboard */
    /** Sidebar **/
    .dashboard-sidebar {background-color: var(--primary) !important}

    .dashboard-sidebar .sidebar-team-switch .switch-content {
        border: 2px #484848 solid !important;
    }
    .dashboard-sidebar .sidebar-team-switch .team-name .team-icon svg,
    .dashboard-grid .grid-item.project-th .project-th-actions .project-th-icon.menu > svg,
    .dashboard-sidebar.settings .back-to-dashboard svg {
        fill: white !important
    }
    .dashboard-sidebar .sidebar-search {
        background: var(--secondary) !important;
        border: 2px #484848 solid !important;
        border-radius: 6px !important;
    }

    .profile-section .dropdown span {
        color: black !important;
    }

    ul.sidebar-nav.no-overflow svg {
        fill: white !important;
    }

    form.profile-form input, form.password-form input {
        background: var(--primary) !important;
        border: 2px #484848 solid !important;
        border-radius: 6px !important;
        color: white !important;
        height: 52px !important;
    }

    label {
        color: white !important;
    }

    /** Modals **/
    .modal-container.onboarding.feature .btn-secondary {
        color: black !important;
    }

    /** Content **/
    .dashboard-container {background: var(--secondary) !important}
    .dashboard-header {background: transparent !important}

    /*** Projects ***/
    .project {background: var(--primary) !important}
    .btn-secondary {
        background: transparent !important;
        color: white !important;
        fill: white !important;
    }
    .dashboard-grid .grid-item.project-th {
        background-color: var(--primary) !important;
        border: 2px #484848 solid !important;
        border-radius: 6px !important;
    }
    .dashboard-grid .grid-item .grid-item-th {
        border-radius: 6px 6px 0px 0px !important;
    }
    `
)})




// JavaScript Detection
function inc() {
    setTimeout(() => {
        penpotEmbed.executeJavaScript(`
        var OS="Unknown";
        if (navigator.userAgent.indexOf("Win")!=-1) OS="Windows";
        if (navigator.userAgent.indexOf("Mac")!=-1) OS="MacOS";
        if (navigator.userAgent.indexOf("X11")!=-1) OS="UNIX";
        if (navigator.userAgent.indexOf("Linux")!=-1) OS="Linux";
    
        if (navigator.userAgent.indexOf == 'MacOS') { // Move away from traffic light buttons
            document.querySelector("#app > section > div.dashboard-sidebar > div > div.sidebar-content > div.sidebar-team-switch").style.marginTop = '54px';
            document.querySelector("#workspace > header > div.left-area").style.marginLeft = '100px'
        }
        else if (navigator.userAgent.indexOf == 'Windows'){ // Move away from titlebar buttons
            document.querySelector("#app > section > div.dashboard-content > header > a").style.marginRight = '150px';
        }
        else {}
        `
    )}, 2500);
    setTimeout(() => {
        inc()
    }, 5000);
}

inc()

// Loading Indicator
onload = () => {
    const loadingWV = document.querySelector('.IndicatorWV')
    const loadstartWV = () => {document.getElementById('IndicatorWV').style.display='flex'}
    const loadstopWV = () => {setTimeout(function(){document.getElementById('IndicatorWV').style.display='none'}, 500);}
    penpotEmbed.addEventListener('did-start-loading', loadstartWV)
    penpotEmbed.addEventListener('did-stop-loading', loadstopWV)
}