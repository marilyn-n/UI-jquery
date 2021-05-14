  //   Adding JSON data / Music form

  //songs variable is out otherwise everytime we click on .btnAdd the function will fire and songs will reset
  const songs = []; 

  function deleteTableItem() {
    $('#music-table button').click(function(e) {
        const tr = e.target.parentElement.parentElement.id;
        songs.splice(tr, 1);
        displayTable();
    });
};

  function displayTable() {
    // we recreate our table to fill it out
    $('#music-table').html(`
        <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Delete</th>
        </tr>`
    );

    // we iterate over songs array
    $.each(songs, function(key, val) {
        $('#music-table tr:last').after( // here we add html to our table
            `<tr id='${key}'>
                <td>${val[0].songName}</td>
                <td>${val[0].artistName}</td>
                <td><button id="delete-${key}">delete</button></td>
            </tr>`
        );
    });
    deleteTableItem(); // add function to all our trs
};

function clearInputs() {
    $('#song').val('');
    $('#artist').val('');
}

function tableControler(e) {
    e.preventDefault();
    
    // we get the input values
    let song = $('#song').val();
    let artist = $('#artist').val();

    if ($('#song').val() && $('#artist').val()) { // checking if inputs are not empty
        // we store data in an obj inside array
        let data = [{ songName: song, artistName: artist }];
        songs.push(data);

        // we display our data table after pushing/updating the array
        displayTable();
        // we clear our inputs
        clearInputs();

    } else {
        console.log('nothing was added here');
    }
}

$('.addSong').click(tableControler);