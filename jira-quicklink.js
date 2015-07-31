javascript: (function () {
    var url = "https://jira.DOMAIN.TLD";
    var jiraID = "";

    if (window.getSelection) {
        jiraID = window.getSelection().toString();
    } else if (document.selection && (document.selection.type != "Control")) {
        jiraID = document.selection.createRange().text;
    }

    if (jiraID.length == 0) {
        jiraID = window.prompt("Jira-ID:", "jira://");
    }

    if (jiraID) {
        var openUrl = "";
        var w;

        if (jiraID.indexOf("jira://") > -1) {
            jiraID = jiraID.substr(7);
        }

        openUrl = url + "/secure/QuickSearch.jspa?searchString=" + jiraID;

        if (jiraID.indexOf("labels/") > -1) {
            openUrl = url + "/issues/?jql=labels%20%3D%20" + jiraID.substr(7);
        }

        w = window.open(openUrl, '_blank');
        w.focus();
    }
})();
