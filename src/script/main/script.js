// Get Element
//! CONTENT ELEMENT
const navbar = document.querySelector("my-navbar");
const content = document.querySelector(".main");
const footer = document.querySelector("my-footer");
const loader = document.querySelector("my-loader");
const noteList = document.getElementById("noteList");

//! FORM ELEMENT GET VALUE
// const title = document.getElementById('noteTitle').value;
// const body = document.getElementById('noteBody').value;
const buttonSumit = document.querySelector(".createdNote");

navbar.classList.add("hide");
content.classList.add("hide");
footer.classList.add("hide");

const url = "https://notes-api.dicoding.dev/v2";

fetchDataAndLoadContent();

// GET ALL NOTE
function getNote() {
  return fetch(`${url}/notes`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((note) => {
      loader.classList.add("hide");
      navbar.classList.remove("hide");
      content.classList.remove("hide");
      footer.classList.remove("hide");

      let data = note.data;
      if (data[0] === undefined) {
        console.log('Parameter "data" Kosong cuy');
      } else {
        renderAllNotes(data);
      }
    })
    .catch((error) => {
      console.error("Something Problem:", error);
    });
}

// ADD FORM NOTE
function addNote() {
  const title = document.getElementById("noteTitle").value;
  const body = document.getElementById("noteBody").value;
  const newNote = {
    title: title,
    body: body,
  };

  fetch(`${url}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newNote),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add note");
      }
      return response.json();
    })
    .then((data) => {
      console.log("success added note:", data);
      fetchDataAndLoadContent();
    })
    .catch((error) => {
      console.error("Something Problem:", error);
    });
}

// DELETE ELEMENT NOTE
function deleteNoteElement(noteId) {
  const noteElement = document.getElementById(noteId).parentNode;
  console.log(noteElement);
  if (noteElement) {
    noteElement.remove();
  }
}

// DELET NOTE FROM API
function deleteNote(noteId) {
  // const validasi = confirm('Hapus Note ?');
  if (confirm("Hapus Note ?")) {
    return fetch(`${url}/notes/${noteId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete note");
        }
        console.log("Note deleted successfully");
        return response.json();
      })
      .then((data) => {
        deleteNoteElement(noteId);
      })
      .catch((error) => {
        console.error("something problem:", error);
      });
  } else {
    console.log("gajadi", noteId);
    return Promise.resolve();
  }
}

// ARCHIVE NOTE
function archiveNote(noteId) {
  return fetch(`${url}/notes/${noteId}/archive`, {
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to archive note");
      }
      console.log("Note archived successfull");
      return response.json();
    })
    .catch((error) => {
      console.error("something problem:", error);
    });
}

// UNARCHIVE NOTE
function unarchiveNote(noteId) {
  return fetch(`${url}/notes/${noteId}/unarchive`, {
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to unarchive note");
      }
      console.log("Note unarchived successfull");
      return response.json();
    })
    .catch((error) => {
      console.error("something problem:", error);
    });
}

// GET ARCHIVE
function getArchive() {
  return fetch(`${url}/notes/archived`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((note) => {
      let data = note.data;
      renderArchive(data);
    });
}

// SHOW ALL NOTES
function renderAllNotes(notes) {
  noteList.innerHTML = "";

  // SHOW ALL
  notes.forEach((singleNote) => {
    const noteItem = document.createElement("div");
    noteItem.classList.add("grid-item");
    noteItem.innerHTML = `
      <div>
        <h3>${singleNote.title}</h3>
        <p>${singleNote.body}</p>
        <button class="delete-button" id="${singleNote.id}">Delete</button>
        <button class="archive-button" id="${singleNote.id}">Archive</button>
      </div>
    `;
    noteList.appendChild(noteItem);
    // DEBUG
    // console.log(`
    //   id: ${singleNote.id}
    //   archive: ${singleNote.archived}
    // `);
  });

  // EVENT DELETE
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const noteId = button.id;
      deleteNote(noteId).then(() => {
        fetchDataAndLoadContent();
        location.reload();
      });
    });
  });

  // EVENT ARCHIVE
  const archiveButtons = document.querySelectorAll(".archive-button");
  archiveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const noteId = button.id;
      archiveNote(noteId).then(() => {
        fetchDataAndLoadContent();
      });
    });
  });
}

// ARCHIVE FOR MODAL
function renderArchive(arsip) {
  // SHOW ALL
  const modalNoteList = document.getElementById("modalNoteList");
  modalNoteList.innerHTML = "";

  arsip.forEach((singleArsip) => {
    const noteItem = document.createElement("div");
    noteItem.classList.add("modal-grid-item");
    noteItem.innerHTML = `
      <div>
        <h3>${singleArsip.title}</h3>
        <p>${singleArsip.body}</p>
        <button class="modal-archive-button" id="${singleArsip.id}">un archive</button>
      </div>
    `;
    modalNoteList.appendChild(noteItem);
  });

  // EVENT UN-ARCHIVE
  const unarchv = document.querySelectorAll(".modal-archive-button");
  unarchv.forEach((button) => {
    button.addEventListener("click", () => {
      const noteId = button.id;
      unarchiveNote(noteId).then(() => {
        fetchDataAndLoadContent();
        location.reload();
      });
      // debug
      // console.log(noteId, 'asda');
    });
  });
}

// LOAD SHOW
function fetchDataAndLoadContent() {
  setTimeout(() => {
    getNote();

    buttonSumit.addEventListener("click", function (event) {
      alert("Note Berhasil Di Tambah");
      addNote();
      location.reload();
    });
  }, 1500);
}

// MODAL
const modalBackground = document.getElementById("modalBackground");
const modalContainer = document.getElementById("modalContainer");
const modalNoteList = document.getElementById("modalNoteList");
const archive = document.getElementById("archive");

function showModal() {
  modalBackground.style.display = "block";
  modalContainer.style.display = "block";
}

function hideModal() {
  modalBackground.style.display = "none";
  modalContainer.style.display = "none";
}

archive.addEventListener("click", () => {
  getArchive().then(() => {
    showModal();
  });
});
modalBackground.addEventListener("click", () => hideModal());
