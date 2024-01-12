function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberValue = member.value;
    var skillsValue = skills.value;
    var skillsArray = skillsValue.split(",");
    var skillsArrayLength = skillsArray.length;
    var skillsArrayIndex = skillsArray.indexOf(memberValue);
    if (skillsArrayIndex > -1) {
        skillsArray.splice(skillsArrayIndex, 1);
        skillsArrayLength = skillsArray.length;
        skillsValue = skillsArray.join(",");
        skills.value = skillsValue;
    } else {
        if (skillsArrayLength > 0) {
            skillsValue = skillsValue + "," + memberValue;
        } else {
            skillsValue = memberValue;
        }
        skills.value = skillsValue;
    }
    //console.log(skillsValue);
}