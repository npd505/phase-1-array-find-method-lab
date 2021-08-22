function superbowlWin(array) {
    const yr = array.find(array => array.result === "W")
    return (yr ? yr.year : undefined);
}
