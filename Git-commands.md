## Create a new empty Git repository:

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

## Restore files

- Restore a file from the latest changes made in the file (before the file is add to staging area):
  **git restore <file_name>**

- Restore a file from the staging area (unstage changes):
  **git restore --staged <file_name>**

---

## Remove untracked files

- preview all untracked files that would be deleted (dry run — safe): **git clean -n**
- preview all untracked directories and files that would be deleted (dry run — safe): **git clean -dn**
- remove untracked files: **git clean -f**
- delete all untracked directories and files: **git clean -df**

---

## Remove files from the staging area

### New school

**git restore --staged** <file_name>

### Old school

**git reset HEAD** <file_name>

- unstage all files: **git reset HEAD**

---

## Remove files after commit

**git reset --soft HEAD~1**: <1> is the how many steps I want to go back. (Go 1 commit before HEAD)

## Check the directory contents:

- **ls** (Unix/Linux/macOS)
- **dir** (Windows)

If using PowerShell or Windows Subsystem for Linux (WSL), both dir and ls are working

---

## Stash changes

save unstaged changes and access them whenever I want.

- Saves changes and remove them from the file: **git stash**
- Create a Named Stash: **git stash push -m "message goes here"**
- View Stashed Changes: **git stash list**
- Apply the Most Recent Stash: **git stash apply**
- Apply a specific stash: **git stash apply stash@{1}** (1 is the number of stash in the list)
- Apply and Remove the Stash: **git stash pop**
- Remove a Stash: **git stash drop stash@{0}** (0 is the number of stash in the list)
- Remove all stashes: **git stash clear**

---

## Recover Lost Work in Git (reflog)

**git reflog** - It works like a history of the branch, and helps with:

- Recover lost commits;
- Undo resets or rebases;
- Find "dangling" or orphaned commits.

Example:

<pre>
$ git reflog
d9fbc3f HEAD@{0}: commit: Fix broken link in footer
3e9c7e2 HEAD@{1}: reset: moving to HEAD~1
c672a47 HEAD@{2}: commit: Add new contact form
a5f9b90 HEAD@{3}: rebase -i (finish): returning to refs/heads/main...
</pre>

Each entry includes:

- A short commit hash

- The HEAD reference at a point in time (e.g., HEAD@{1})

- The action performed (commit, reset, etc.)

- An optional message

With command **git reset --hard** and the **hash** of the commit I can go back to that state and restore all my work or deleted files

### Use Case

**Recover a Lost Commit**

Suppose I ran git reset --hard and lost some work:

<pre>
git reflog

git checkout commit_hash_ID

In detached HEAD I can create a branch to save it:

git checkout -b recovery_branch_name
</pre>

### Reflog entries expire after a while:

- Typically 90 days for most references

- I can clear them manually with:

**git reflog expire --expire=now --all**

**git gc --prune=now**

---

## Check Your Current Directory:

**pwd**

---

## Lists all tracked files in the current repository:

**git ls-files**

### It shows tracked files—those that are:

- Already added with git add;
- Or committed (in the index).

### It does not show

- Untracked or ignored files.

---

## Deleting files

**git rm <file_name>**

- Deletes files from disk (by default)
- Unstage the files (removes them from the Git index)
- Prepares the removal to be committed

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

- Displays a visual representation of branches and merges:
  **git log --graph**

- Shows each commit on one line (compact format):
  **git log --oneline**

- Uses color for better readability
  **git log --color**

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

## List of all local branches.

**git branch**
The currently active branch is marked with an asterisk \*.

## List of all remote branches

**git branch -r**

---

## Merge branches

### fast-forward merge

- Switch to the branch you want to merge into (usually main or master)
  **git switch** <main_branch_name>
- Merge the other branch into the current branch:
  **git merge** <other_branch_name>

Type of merge that occurs when there is a direct path from the current branch to the branch being merged.
If no new commits have been added to main branch since the branch feature was created, then main can be fast-forwarded to commit.

Characteristics of Fast-Forward Merge:

- No merge commit is created.
- History is linear and cleaner.
- Happens when the target branch is an ancestor of the source branch.
- Often used when working alone or when clean history is preferred.

---

## Deleting Branches

- Delete a Local Branch: **git branch -d**<branch_name>

- Force delete (even if not merged): **git branch -D** <branch_name>

- Deleting multiple branches: **git branch -d**<one_branch_name> <two_branch_name>
  or **git branch -D**<one_branch_name> <two_branch_name>

- Delete a Remote Branch: **git push origin --delete** <branch_name>

## -------------------Detached HEAD--------------------------

## Enter Detached HEAD mode:

- **git checkout** <commit_ID> or **git switch --detach** <commit_ID>

## Get out of Detached HEAD

- **git switch** <branch_name>

## -------------------.gitignore--------------------------

It is used in Git to specify files and directories that should be ignored by version control.

- Ignore all .log files: **\*.log**
- Do not ignore file: **!<file_name>.log**
- Ignore all files in a directory: **<directory_name>\***
