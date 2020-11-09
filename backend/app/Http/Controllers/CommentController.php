<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
class CommentController extends Controller
{
    public function addComment(Request $request){
        $newComment = new Comment();
        $newComment->blog_id = $request->input('blog_id');
        $newComment->comment = $request->input('comment');
        $newComment->save();
        return response()->json($newComment, 200);
    }
}
