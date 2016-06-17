 /* // MOVES - 9 //

1) [4][3] <-- [6][3];
2) [2][5] <-- [0][6];
3) [4][2] <-- [6][2];
4) [2][4] <-- [1][4];
5) [5][6] <-- [6][6];
6) [3][3] <-- [1][3];
7) [6][6] <-- [7][5];
8) [1][4] <-- [0][5];
9) [5][5] <-- [7][6];

*/

// var board = [
//   ['R','N','B','Q','K','B','N','R'],
//   ['P','P','P','P','P','P','P','P'],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   ['p','p','p','p','p','p','p','p'],
//   ['r','n','b','q','k','b','n','r'] ];

// VARIABLES FOR EACH PIECE //

var count = 0;
var gp4 = $('.goldpawn4');
var blank1 = $('.blank1');
var bk2 = $('.bk2');
var blank2 = $('.blank2');
var gp3 = $('.goldpawn3');
var blank3 = $('.blank3');
var bp5 = $('.blackpawn5');
var blank4 = $('.blank4');
var gp7 = $('.goldpawn7');
var blank5 = $('.blank5');

  var board = [
    ['R','N','B','Q','K','B',bk2,'R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',blank2,' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',blank3,blank1,' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p',gp3,gp4,'p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

  $('.forwards').on('click', function() {
    count++;
    if (count == 1) {

      console.log("Click forwards");
      board.join('\n') + '\n\n';
      board[4][3] = board[6][3];
      board[6][3] = ' ';
      console.log(board.join('\n'));
      board.join('\n');
      blank1.append(gp4);
      console.log("First move");
  };

    if (count == 2) {

      board.join('\n') + '\n\n';
      board[2][5] = board[0][6];
      board[0][6] = ' ';
      console.log(board.join('\n'));
      board.join('\n');
      blank2.append(bk2);
      console.log("Second move");
};

    if (count == 3) {

      board.join('\n') + '\n\n';
      board[4][2] = board[6][2];
      board[6][2] = ' ';
      console.log(board.join('\n'));
      board.join('\n');
      blank3.append(gp3);
      console.log("Third move");
};

    if (count == 4) {

      board.join('\n') + '\n\n';
      board[4][2] = board[6][2];
      board[6][2] = ' ';
      console.log(board.join('\n'));
      board.join('\n');
      blank4.append(bp5);
      console.log("Fourth move");
    };

    if (count == 5) {

      board.join('\n') + '\n\n';
      board[4][2] = board[6][2];
      board[6][2] = ' ';
      console.log(board.join('\n'));
      board.join('\n');
      blank5.append(gp7);
      console.log("Fifth move");
    };








  });
