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

## Git tag

Used to mark specific points in the repository’s history as important.

### Lightweight Tags

lightweight tag is just a reference (a file containing the commit hash) and doesn’t store any extra information. Useful for temporary bookmarks or local markers where additional metadata isn’t required.

**git tag** <tag_name> <has_number_commit>: creates tag to the commit with the given has.
Example:

<pre>git tag version-1.0 04d93ab0e1198d11334fcf6b31d53408ba2f8912</pre>

### Annotated Tags

- Metadata-Rich: They are stored as full objects in the Git database, containing metadata like the tagger's name, email, date, and a tagging message.
- Cryptographically Signed (optional): They can be signed with GPG, adding an additional layer of trust.
- Usage: Best for public releases and formal versioning where history and authenticity matter.

**git tag** -a <tag_name> -m <"info message for the tag">

Example:

<pre>git tag -a version-2.2 -m 'this is the version 2.2'</pre>

#### Listing and Viewing Tags

- **git tag**: List All Tags

- **git show** <tag_name>: Show Detailed Tag Information - displays the tagger information, message, and the commit details linked to that tag.

#### Deleting Tags

- **git tag -d** <name_of_the_tag>: Deleting a Local Tag

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

## lists all branches - local and remote.

**git branch -a**: shows Local branches and Remote-tracking branches

Example:

<pre>
git branch -a
* main
  remotes/origin/main
</pre>

## Detailed list of your local branches

**git branch -vv**

Example Output:

<pre>
* feature-remote 785665d [origin/feature-remote] add file3.txt
  main           264a350 [origin/main] Git commands list
</pre>

- The name of each branch
- Whether it’s the current branch (\*)
- The last commit’s hash and message
- The upstream (tracking) branch, if one is set
- Whether your branch is ahead or behind its upstream

## Detailed information about the remote named origin

**git remote show origin**

It helps you understand how your local branches relate to the remote branches, what you're tracking, and whether you’re ahead or behind.

<u>What It Shows:</u>

- Fetch and push URLs (where Git fetches/pushes data)
- Tracked remote branches
- Local branches configured to track remote branches
- Whether your local branches are ahead, behind, or diverged from the remote
- Any branches marked for push by default

<u>Why use git remote show origin?</u>

- To check if your local branches track remote branches
- To confirm push/pull configuration
- To detect if your branches are out of sync
- To troubleshoot tracking or syncing issues

---

## Deleting Branches

- Delete a Local Branch: **git branch -d**<branch_name>

- Force delete (even if not merged): **git branch -D** <branch_name>

- Deleting multiple branches: **git branch -d**<one_branch_name> <two_branch_name>
  or **git branch -D**<one_branch_name> <two_branch_name>

- Delete a Remote Branch: **git push origin --delete** <branch_name>

## -------------------Merge branches--------------------------

### Fast-forward merge

- Switch to the branch you want to merge into (usually main or master)
  **git switch** <main_branch_name>
- Merge the other branch into the current branch:
  **git merge** <other_branch_name> Fast-forward if possible (no merge commit)

Type of merge that occurs when there is a direct path from the current branch to the branch being merged.
If no new commits have been added to main branch since the branch feature was created, then main can be fast-forwarded to commit.

Characteristics of Fast-Forward Merge:

- No merge commit is created.
- History is linear and cleaner.
- Happens when the target branch is an ancestor of the source branch.
- Often used when working alone or when clean history is preferred.

### Recursive Merge

When Git can't do a fast-forward merge (because the branches have diverged), it performs a three-way merge using the recursive strategy by default.

This involves:

1. Finding the common ancestor of the two branches (called the "merge base"),
2. Comparing the changes made in both branches,
3. Merging those changes into a new merge commit.

Example:

<pre>
A---B---C (main)
     \     \
      D---E---F (feature)
</pre>

**git merge --no-ff** <branch_name>: Always creates a merge commit. Preserve feature history, clearer logs, easier reverts

#### In Summary

**git merge** <branch_name> creates Fast-forward if possible (no merge commit). If Fast-forward merge is not posible then creates automatically Recursive Merge.

**git merge --no-ff** <branch_name> creates Recursive Merge and always creates a merge commit. Preserve feature history, clearer logs, easier reverts

---

### Rebase

**git rebase**: lets you move or combine a sequence of commits to a new base commit (<u>re-writes code history!</u>). It's typically used to make your Git history cleaner and more linear.

<u>Caution</u>

- Rewriting history: Rebase rewrites commit history. Avoid using it on public/shared branches unless everyone agrees.
- Use rebase only on local commits or your own feature branches.
- Git recommends to never use Rebase.

Example:

- Updating a feature branch with changes from the main branch:
<pre>
git checkout feature-branch
git rebase main
</pre>

This applies feature-branch commits on top of the latest main, as if you had started from there.

---

### Cherry-pick

**git cherry-pick** <commit_hash>: apply a specific commit from one branch onto another branch, without merging or rebasing the entire branch.

Example:

Copying a hotfix from main to develop: You fixed a bug directly in main, but now you want the same fix in develop:

<pre>
git switch develop
git cherry-pick commit-hash
</pre>

---

## Download updates from a remote repository

### git fetch

- Connects to a remote repository (like origin)
- Downloads new commits, branches, and tags
- Updates your local copy of the remote tracking branches (e.g., origin/main)
- Does NOT change your working directory or merge changes into your current branch

**git fetch origin**: gets the latest changes from the origin remote

**git diff main origin/main**: See the differences between my files and latest changes from the origin remote

**git merge origin/main**: Merge the new changes

## git pull

- Connects to a remote repository (e.g., origin)
- Fetches the latest changes (commits, branches)
- Merges the fetched changes into your current branch

**git pull** <remote_name> <branch_name>

Example:

<pre>
git pull origin main
</pre>

This fetches and merges the latest changes from the main branch on the origin remote into your current branch.

<u>Important Notes:</u>

- If there are conflicting changes, Git will pause the pull and ask you to resolve the merge conflicts.
- It modifies your working directory, unlike git fetch.

## Create a new local branch that is set to track a remote branch

**git branch --track** <new_local_branch> <remote_origin>/<remote_branch_name>

- Creates a local branch (if it doesn’t already exist)
- Links it to a remote branch (tracking setup)
- So that commands like git pull and git push know which remote branch to work with

Example:

<pre>
git branch --track feature-x origin/feature-x
</pre>

This will:

- Create a new local branch named feature-x
- Set it to track origin/feature-x

## git clone - create a local copy of a remote repository

**git clone** <repository_url>

<u>What git clone does:</u>

- Creates a new directory with the project name (or a custom name if specified).
- Initializes a .git directory inside it (i.e., sets it up as a Git repo).
- Downloads all files and commits from the remote repo.
- Sets the remote as origin by default.
- Checks out the default branch (usually main or master).

<u>Example:</u>

<pre>
git clone https://github.com/username/repo-name.git
</pre>

This will:

- Create a local folder named repo-name
- Pull the code from GitHub
- Set origin to point to https://github.com/username/repo-name.git

<u>Optional: Clone to a specific folder</u>

<pre>
git clone https://github.com/username/repo-name.git my-folder
</pre>

This clones the repo into a folder named my-folder.

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
