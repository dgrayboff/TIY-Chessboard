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
var blanktest = $('.blanktest');

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

  var count = 0;

  $('.forwards').on('click', function(e) {
    count++;
    e.preventDefault;

    if (count == 1) {

      console.log("Click forwards");
      console.log(board.join('\n') + '\n\n');
      board[4][3] = board[6][3];
      board[6][3] = ' ';
      console.log(board.join('\n'));
      var move1 = board[4][3];
      blank1.append(move1);
      console.log("First move");

        // $('.backwards').on('click', function(e) {
        //
        //   if (count == 1 ){
        //   // blank1.remove();
        //   blank1.empty(); // empties the square of the previous move
        //   gp4.append(); // try to append original html here
        //   // gp4.append(move1);
        //   console.log("reverse");
        // }
        // });


    };


    if (count == 2) {

      console.log(board.join('\n') + '\n\n');
      board[2][5] = board[0][6];
      board[0][6] = ' ';
      console.log(board.join('\n'));
      var move2 = board[2][5];
      blank2.append(move2);
      console.log("Second move");

    //   $('.backwards').on('click', function(e) {
    //
    //     if (count == 2 ){
    //     // blank1.remove();
    //     blank2.empty(); // empties the square of the previous move
    //     bk2.append(); // try to append original html here
    //     // gp4.append(move1);
    //     console.log("reverse");
    //   }
    // });


    };

    if (count == 3) {

      console.log(board.join('\n') + '\n\n');
      board[4][2] = board[6][2];
      board[6][2] = ' ';
      console.log(board.join('\n'));
      var move3 = board[4][2];
      blank3.append(move3);
      console.log("Third move");
    };

    if (count == 4) {

      console.log(board.join('\n') + '\n\n');
      board[2][4] = board[1][4];
      board[1][4] = ' ';
      console.log(board.join('\n'));
      var move4 = board[2][4];
      blank4.append(move4);
      console.log("Fourth move");
    };

    if (count == 5) {

      console.log(board.join('\n') + '\n\n');
      board[5][6] = board[6][6];
      board[6][6] = ' ';
      console.log(board.join('\n'));
      var move5 = board[5][6];
      blank5.append(move5);
      $('.seventh').html(" ");
      console.log("Fifth move");
    };

    if (count == 6) {

      console.log(board.join('\n') + '\n\n');
      board[3][3] = board[1][3];
      board[1][3] = ' ';
      console.log(board.join('\n'));
      var move6 = board[3][3];
      blank6.append(move6);
      console.log("Sixth move");
    };



    if (count == 7) {

      // var boardTwo = [ // 7th move wasn't working as it moves to a place where a piece already was, so thought a new board would help, but found that appending using the div class was the trick instead of the image class that has the piece icon.
      //   ['R','N','B','Q','K',bb2,bk2,'R'],
      //   ['P','P','P',bp4,bp5,'P','P','P'],
      //   [' ',' ',' ',' ',blank5,blank2,' ',' '],
      //   [' ',' ',' ',blank6,' ',' ',' ',' '],
      //   [' ',' ',blank3,blank1,' ',' ',' ',' '],
      //   [' ',' ',' ',' ',' ',' ',' ',' '],
      //   ['p','p',gp3,gp4,'p','p',blank7,'p'],
      //   ['r','n','b','q','k',gb2,'test','r'] ];

      console.log(board.join('\n') + '\n\n');
      board[6][6] = board[7][5];
      board[7][5] = ' ';
      console.log(board.join('\n'));
      console.log(gp7);
      var move7 = board[6][6];
      $('.seventh').append(move7);
      $('.fifth').html(" ");
      // blank7.html(gb2);
      // blank7.append(board[6][6]);
      // gp7.append(gb2);
      console.log("Seventh move");
    };

    if (count == 8) {

      console.log(board.join('\n') + '\n\n');
      board[1][4] = board[0][5];
      board[0][5] = ' ';
      console.log(board.join('\n'));
      var move8 = board[1][4];
      $('.eight').append(move8);
      console.log("Eighth move");
    };

    if (count == 9) {

      console.log(board.join('\n') + '\n\n');
      board[5][5] = board[7][6];
      board[7][6] = ' ';
      console.log(board.join('\n'));
      var move9 = board[5][5];
      blank9.html(move9);
      console.log("Ninth move");
    };
  });



    // BACKWARDS CLICK //

    var board2 = [
      ['R','N','B','Q','K',bb2,bk2,'R'],
      ['P','P','P',bp4,bp5,'P','P','P'],
      [' ',' ',' ',' ',blank5,blank2,' ',' '],
      [' ',' ',' ',blank6,' ',' ',' ',' '],
      [' ',' ',blank3,blank1,' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p',gp3,gp4,'p','p',gp7,'p'],
      ['r','n','b','q','k',gb2,gk2,'r'] ];


    $('.backwards').on('click', function(e) {

      e.preventDefault;

        // if (countback == 1) {
        //   console.log("Back click");
        //   board[6][3] = board[4][3];
        //   board[4][3] = ' ';
        //   var moveback1 = board[6][3];
        //   gp4.append(moveback1);
        // };


        if (count == 1 ) {
          count--;

          var back1 = board2[6][3];
          blank1 = ' ';
          $('.goldpawn4b').html(back1); // does the trick, calling div instead of img
          console.log("reverse");
        }

        if (count == 2 ){
          count--;

          var back2 = board2[0][6];
          // blank2 = ' ';
          $('.knight2').html(back2);
          console.log("reverse");
        }

        if (count == 3 ){
          count--;

          var back3 = board2[6][2];
          $('.pawn3b').html(back3);
          console.log("reverse");
        }

        if (count == 4 ){
          count--;

          var back4 = board2[1][4];
          $('.pawn5b').html(back4);
          console.log("reverse");
        }

        if (count == 5 ){
          count--;

          var back5 = board2[6][6];
          $('.seventh').html(back5);
          console.log("reverse");
        }

        if (count == 6 ){
          count--;

          var back6 = board2[1][3];
          $('.blackpawn4b').html(back6);
          console.log("reverse");
        }

        if (count == 7 ){
          count--;

          var back7 = board2[7][5];
          $('.fifth').html(back7);
          console.log("reverse");
        }

        if (count == 8 ){
          count--;

          var back8 = board2[0][5];
          $('.blackbishopb').html(back8);
          console.log("reverse");
        }

        if (count == 9 ){
          count--;

          var back9 = board2[7][6];
          $('.goldknightb').html(back9);
          console.log("reverse");
        }

});
