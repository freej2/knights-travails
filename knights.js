function knightMoves([x1,y1],[x2,y2]){
    // create empty board for tracking visited positions
    const board = [];
    for (let i = 0; i < 8; i++){
        board[i] = new Array(8).fill(0);
    }

    // Mark starting position as visited
    board[x1][y1] = 1;

    // Queue will store [position, path] pairs
    let queue = [[[x1,y1], [[x1,y1]]]];

    while (queue.length > 0){
        // Destructure current position and path
        const [currentPos, currentPath] = queue.shift();
        const [cx, cy] = currentPos;

        // If we found the target, return the path
        if (cx === x2 && cy === y2){
            return currentPath;
        }

        // Generate all possible moves from current position
        const moves = [
            [cx+2,cy+1], [cx+2,cy-1],
            [cx-2,cy+1], [cx-2,cy-1],
            [cx+1,cy+2], [cx-1,cy+2],
            [cx+1,cy-2], [cx-1,cy-2]
        ];

        // Filter valid moves and add to queue with updated paths
        for (const move of moves){
            const [newX, newY] = move;
            if (isValid(move) && board[newX][newY] === 0){
                board[newX][newY] = 1; // Mark as visited
                queue.push([move, [...currentPath, move]]);
            }
        }
    }
}

function isValid([x1,y1]){
    return (x1 >= 0 && x1 < 8 && y1 >= 0 && y1 < 8); 
}

console.log(knightMoves([3,3],[4,3]));