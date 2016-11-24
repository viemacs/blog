;; put autosave and backup files into ~/.emacs.d/{autosave,save}
; create the directories is necessary
(make-directory "~/.emacs.d/autosave/" t)
(make-directory "~/.emacs.d/save/" t)
; specific directory for autosave and backup
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(ansi-color-faces-vector
   [default default default italic underline success warning error])
 '(auto-save-file-name-transforms (quote ((".*" "~/.emacs.d/autosave/" t))))
 '(backup-directory-alist (quote ((".*" . "~/.emacs.d/save"))))
 '(custom-enabled-themes (quote (wombat))))

;; remove the welcome message
(setq inhibit-startup-message t)
;; disable the menu bar
;(menu-bar-mode -1)
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
