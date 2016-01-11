<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="author" content="Evgenia Manolova">
  <title>Lesson 12 examples</title>

  <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="style.css">

  <script src="js/person.js" defer="true"></script>
  <script src="js/birthdate.js"></script>
</head>

<body>
  <form id="addPerson">

    <fieldset>
      <legend>Add person</legend>
      <p>
        <label>Name:</label>
        <input type="text" placeholder="name" id="nameInput" value="Ivan" maxlength="16" required>
      </p>
      <p>
        <label>Birth date:</label>
        <input type="date" placeholder="birthdate" id="birthdateInput" value="2015-11-22" required>
      </p>
      <p>
        <label></label>
        <input type="submit" value="add">
      </p>
    </fieldset>
  </form>

  <section id="people">
    <h3>People:</h3>
  </section>

  <section id="waste">
    <h3>Danger zone</h3>

    <div id="trash-container">
      <img src="trash.png">
    </div>
  </section>
</body>
