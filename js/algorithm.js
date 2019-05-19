function djikstraAlgo(start, finish) {
    if (start.x == finish.x && start.y == finish.y) {
        return [];
    }
    var queue = [start], index = 0, result = null;
    while (result == null && index != 10000) {
        var adj = getAdj(queue[index]);
        adj.forEach(element => {
            element.prev = queue[index];
            queue.push(element);

            if (element.x == finish.x && element.y == finish.y) {
                result = element;
            }
        });
        index++;
    }
    if (result !== null) {
        while (result.prev !== start) {
            result = result.prev;
        }
        if (result.prev.x == start.x && result.prev.y == start.y) {
            return result;
        }
        return start;
    }
    else {
        result = queue[index];
        while (result.prev !== start) {
            result = result.prev;
        }
        return result;
    }
}

function getAdj(point) {
    var ind = [];
    //LEFT
    if (point.x - 1 >= 0) {
        if (maze[point.y][point.x-1] != 1) {
            ind.push({ x: point.x-1, y: point.y });
        }
    }

    //UP
    if (point.y - 1 >= 0) {
        if (maze[point.y-1][point.x] != 1) {
            ind.push({ x: point.x, y: point.y-1});
        }
    }

    //RIGHT
    if (point.x + 1 < maze.length) {
        if (maze[point.y][point.x+1] != 1) {
            ind.push({ x: point.x+1, y: point.y});
        }
    }

    //DOWN
    if (point.y + 1 < maze.length) {
        if (maze[point.y+1][point.x] != 1) {
            ind.push({ x: point.x, y: point.y+1});
        }
    }

    shuffleArray(ind);
    return ind;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}