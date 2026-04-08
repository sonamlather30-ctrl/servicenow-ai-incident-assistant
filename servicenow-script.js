// Mock ServiceNow Business Rule

(function executeRule(current, previous) {

    if (current.description) {
        // Simulated AI response
        var summary = "AI-generated summary will be stored here";
        current.u_ai_summary = summary;
    }

})(current, previous);
