package backend.demo.controller;

import backend.demo.model.Post;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:5173")
public class PostController {

    private List<Post> posts = new ArrayList<>();

    @PostMapping
    public String createPost(@RequestBody Post post) {
        posts.add(post);
        return "Post submitted successfully!";
    }

    @GetMapping
    public List<Post> getPosts() {
        return posts;
    }
}
