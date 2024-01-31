#!/usr/bin/expect -f
set password $::env(TIZEN_DISTRIBUTOR_PW)
set timeout -1
spawn tizen package -t wgt
match_max 100000
expect -exact {
    "The active profile is used for signing. If you want to sign with other profile, please use '--sign' option.\r
    Author password: " { send -- "$password\r"; exp_continue }
    "\r
    Save author password\r
    Yes: (Y), No: (N) ?"  { send -- "N\r"; exp_continue }
    "N\r
    Distributor1 password: "  { send -- "$password\r"; exp_continue }
    "\r
    Save distributor1 password\r
    Yes: (Y), No: (N) ?"  { send -- "N\r"; exp_continue }
    eof
}
