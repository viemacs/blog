;; put autosave and backup files into ~/.emacs.d/{autosave,save}
; create the directories is necessary
(make-directory "~/.emacs.d/autosave/" t)
(make-directory "~/.emacs.d/save/" t)
; specific directory for autosave and backup
(custom-set-variables
  '(auto-save-file-name-transforms '((".*" "~/.emacs.d/autosave/" t)) )
  '(backup-directory-alist '((".*" . "~/.emacs.d/save")) ) )

;; disable the menu bar
(menu-bar-mode -1)
