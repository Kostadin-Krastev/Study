## Create a new Git repository:

**git init**

---

### To commit, stage, and push changes to a Git repository using the terminal, follow these steps:

- Check the Current Status
  Run the following command to see which files have been modified, added, or deleted:
  **git status**

This command shows:

Untracked files: Files not yet staged for commit.
Changes not staged for commit: Modified files that haven't been staged.
Changes staged for commit: Files ready to be committed.

---

### Stage Files

Use the **git add** command to stage files for the commit:

- Stage a specific file:
  **git add** <file_name>

(**If a file name contains spaces**, you should enclose the file name in quotes when using it in Git commands.)
Example
If your file name is: my file.txt:
Correct Command:
**git add** "my file.txt"

- Stage multiple files:
  **git add** file1 file2

- Stage all changes:
  **git add .**

---

### Commit the Changes

After staging, create a commit with a descriptive message:
**git commit -m** 'Your commit message'

---

### Push Changes to Remote Repository

**git push origin** <branch_name>

Replace <branch_name> with the name of your branch, such as main or dev.
For example:
**git push origin** main

- If you are in the branch that you want to push the changes only type:
  **git push**

---

## Check the directory contents:

- **ls** (Unix/Linux/macOS)
- **dir** (Windows)

If using PowerShell or Windows Subsystem for Linux (WSL), both dir and ls are working

---

## Check Your Current Directory:

**pwd**

---

## Navigate Back in Folders:

**cd ..**

---

## Entering a Folder:

**cd** <folder_name>

---

## Clear the terminal screen:

**cls**

---

## View the list of commit history of a Git repository

**git log**

- To exit the list:
  **q**

---

## Returning to old commit

**git checkout** id of the commit

- How is done:

1. **git log** - to see commits and their ID's
2. **git checkout** and writing the commit ID

---

## ----------------------BRANCHES--------------------------

## Create new branch

**git branch** <new_branch_name>

## Create and switch to a new branch

**git switch -c** <new_branch_name>

---

## Switching branches

**git switch** <the_branch_name>

---

## View list of all local branches.

**git branch**
The currently active branch is marked with an asterisk \*.

---

## Merge branches

- Switch to the branch you want to merge into (usually main or master)
  **git switch** <main_branch_name>
- Merge the other branch into the current branch:
  **git merge** <other_branch_name>

## -------------------Detached HEAD--------------------------

## enter detached HEAD mode:

- git checkout <commit_ID> or git switch --detach <commit_ID>

## Get Out of Detached HEAD

- git switch <branch_name>
