const express = require("express");
const app = express();
const cors = require("cors");

const port = 5555;
const projectDb = require("./data/helpers/projectModel");
const actionDb = require("./data/helpers/actionModel");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello There");
})

app.get("/api/projects", (req, res) => {
  projectDb
    .get()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    })
})

app.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  projectDb
    .get(id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    })
})

app.post("/api/projects", (req, res) => {
  const { name, description, completed } = req.body;
    projectDb
      .insert({name, description, completed})
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        console.log(err);
      })
})

app.delete("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  projectDb
    .remove(id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    })
})

app.put("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;
  projectDb
    .update(id, {name, description, completed})
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    })
})

app.get("/api/projects/:project_id/actions", (req, res) => {
  const { project_id } = req.params;
  projectDb
    .getProjectActions(project_id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    })
})

app.get("/api/actions", (req, res) => {
  actionDb
    .get()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    })
})

app.get("/api/actions/:id", (req, res) => {
  const { id } = req.params;
  actionDb
    .get(id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    })
})


app.post("/api/actions/:project_id", (req, res) => {
  const { project_id } = req.params;
  const { notes, description, completed} = req.body;
  actionDb
    .insert({ project_id, notes, description, completed})
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    })
})

app.delete("/api/actions/:id", (req, res) => {
  const { id } = req.params;
  actionDb
    .remove(id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    })
})

app.put("/api/actions/:id", (req, res) => {
  const { id } = req.params;
  const { notes, description, completed } = req.body;
  actionDb
    .update(id, {notes, description, completed})
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    })
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
