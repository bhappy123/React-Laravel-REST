<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Session;

class UserController extends Controller
{
    public function signup(Request $request) {
        $request->validate([
            'name'=>'required',
            'email'=>'required',
            'password'=>'required'
        ]);
        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Crypt::encrypt($request->input('password'));

        $user->save();

        return response()->json('user  created successfully', 200);
    }


    public function login(Request $request){
        $userDetail = DB::table('users')
        ->where('email', $request->input('email'))
        ->get();
        if(Crypt::decrypt($userDetail[0]->password) == $request->input('password')){

           $sesVal = new Session();
            $isPresent = DB::table('sessions')
            ->where('user_id',  $userDetail[0]->id)
            ->get();
            if(count($isPresent)){
                Session::destroy($isPresent[0]->id);
            }
            // return count($isPresent);
           $sesVal->user_id = $userDetail[0]->id;
           $sesVal->token = sha1(time());
            $sesVal->save();
            
            $authUser = DB::table('sessions')
            ->where('user_id',  $userDetail[0]->id)
            ->get();
            
            session()->put('token', $authUser[0]->token);
            return response()->json(['token' => session()->get('token'), 'status'=>200]);
        }
        else{
            return response()->json(["msg"=>"unauthorized"]);
        }
    }
}
