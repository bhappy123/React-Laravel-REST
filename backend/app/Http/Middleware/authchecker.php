<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\DB;
class authchecker
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {   
        $data = DB::table('sessions')->select('token')->where('token', $request->token)->first();
        if($data->token){
            return $next($request);
        }
        else{
            return response()->json(["message"=>"Log In First","status"=>401,"err"=>true]);
        }
    }
}
