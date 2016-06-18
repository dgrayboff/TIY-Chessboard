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
 //      ['R','N','B','Q','K','B','N','R'],
 //      ['P','P','P','P','P','P','P','P'],
 //      [' ',' ',' ',' ',' ',' ',' ',' '],
 //      [' ',' ',' ',' ',' ',' ',' ',' '],
 //      [' ',' ',' ',' ',' ',' ',' ',' '],
 //      [' ',' ',' ',' ',' ',' ',' ',' '],
 //      ['p','p','p','p','p','p','p','p'],
 //      ['r','n','b','q','k','b','n','r'] ];

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
var bp4 = $('.blackpawn4')
var blank6 = $('.blank6');
var gb2 = $('.goldbishop2');
var blank7 = $('.blank7');
var bb2 = $('.blackbishop2');
var blank8 = $('.blank8');
var gk2 = $('.goldknight2');
var blank9 = $('.blank9');

//////////////////////////////


  var board = [
    ['R','N','B','Q','K',bb2,bk2,'R'],
    ['P','P','P',bp4,bp5,'P','P','P'],
    [' ',' ',' ',' ',blank5,blank2,' ',' '],
    [' ',' ',' ',blank6,' ',' ',' ',' '],
    [' ',' ',blank3,blank1,' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p',gp3,gp4,'p','p',gp7,'p'],
    ['r','n','b','q','k',gb2,gk2,'r'] ];

////////////////////////////


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
      board[2][4] = board[1][4];
      board[1][4] = ' ';
      console.log(board.join('\n'));
      board.join('\n');
      blank4.append(bp5);
      console.log("Fourth move");
    };

    if (count == 5) {

      board.join('\n') + '\n\n';
      board[5][6] = board[6][6];
      board[6][6] = ' ';
      console.log(board.join('\n'));
      board.join('\n');
      blank5.append(gp7);
      console.log("Fifth move");
    };

    if (count == 6) {

      board.join('\n') + '\n\n';
      board[3][3] = board[1][3];
      board[1][3] = ' ';
      console.log(board.join('\n'));
      board.join('\n');
      blank6.append(bp4);
      console.log("Sixth move");
    };

    if (count == 7) {

      board.join('\n') + '\n\n';
      board[6][6] = board[7][5];
      board[7][5] = ' ';
      console.log(board.join('\n'));
      board.join('\n');
      blank7.append(gb2);
      // gp7.append(gb2);
      console.log("Seventh move");
    };

    if (count == 8) {

      board.join('\n') + '\n\n';
      board[1][4] = board[0][5];
      board[0][5] = ' ';
      console.log(board.join('\n'));
      board.join('\n');
      blank8.html(bb2);
      console.log("Eighth move");
    };

    if (count == 9) {

      board.join('\n') + '\n\n';
      board[5][5] = board[7][6];
      board[7][6] = ' ';
      console.log(board.join('\n'));
      board.join('\n');
      blank9.html(gk2);
      console.log("Ninth move");
    };







  });
