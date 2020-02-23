module.exports = function calculateHanoi(disksNumber, turnsSpeed/* disksNumber, turnsSpeed */) {
    const [turns, seconds] = [2**disksNumber - 1, (2**disksNumber - 1) / (turnsSpeed / 3600)];
    return {
        turns,
        seconds
    };
}