<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Hash;
use App\Member;

class MemberController extends Controller
{
    public function Register(Request $request)
    {

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

        return response()->json([$member, 'messages' => 'Register Success'], 200);
    }

    public function Login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $email = $request->get('email');
        $password = $request->get('password');
        if (Member::where('email', $email )->count() == '1') {
            $member = Member::where('email', $email)->first();
            if (Hash::check($password, $member->password)) {
                return response()->json($member, 200);
            } else {
                return response()->json(['messages' => 'password ผิด'], 401);
            }
        } else {
            return response()->json(['messages' => 'อีเมลล์ผิด'], 401);
        }
    }
}
