<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Hash;
use App\Member;

class MemberController extends Controller
{
    public function Register(Request $request) {

        $validatedData = $request->validate([
            'username' => 'required',
            'email' => 'required',
            'password' => 'required',
            'password_again' => 'required|same:password'
        ]);

        $member = new Member;
        $member->username = $request->get('username');
        $member->email = $request->get('email');
        $member->password = Hash::make($request->get('password'));
        $member->save();

        return response()->json([$member,'messages'=>'Register Success'],200);
    }

    
}
