<template>
  <div id="app">
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
			<div class="container">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
					<div class="nav-link">
					</div>
					</li>
			
					<li class="nav-item">
						<a class="nav-link loginList" href="user/signUp.jsp"><i class="fas fa-user"></i> Sign Up</a>
					</li>
					<li class="nav-item loginList" style="position:relative">
						<a class="nav-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
							<i class="fas fa-lock"></i>Login
						</a>
						<div class="collapse" id="collapseExample" style="position: absolute; z-index: 100; right: 0px; width: 250px;">
							<div class="card card-body bg-dark" id="loginWindow">
								<form>
									<input type="hidden" name="command" value="login">
									<label class="text-white">아이디</label><br>
									<input type="text" class="form-control" name="id" id="identifier" required><br>
									<label class="text-white">비밀번호</label><br>
									<input type="password" class="form-control" name="pass" id="password" required><br> <br> 
									<input type="button" class="btn btn-light" value="로 그 인" id="login" style="width:100%;">
								</form>
								<a class="btn btn-dark" href="#">비밀번호 찾기</a>
							</div>
						</div>
					</li>
					
					<li class="nav-item logoutList">
						<a class="nav-link" href="#"><i class="fas fa-users"></i>회원리스트</a>
					</li>
					<li class="nav-item logoutList">
						<a class="nav-link" href="" id="logout"><i class="fas fa-lock-open"></i>LogOut</a>
					</li>
					<li class="nav-item logoutList">
						<a class="nav-link" href="/user/userInfo.jsp"><i class="fas fa-user"></i> 회원정보</a>
					</li>
					
				</ul>
			</div>
		</nav>
		
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: 'Header',
  components: {
  }
}
</script>

<style>

</style>
